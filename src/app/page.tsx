"use client";

import React, { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { WordResult } from '@/components/WordResult';
import { WordData, WordApiError } from '@/types/Word';

export interface HistoryEntry {
  word: string;
  timestamp: string; // Guardaremos como ISO string para facilidad con localStorage
}

export default function Home() {
  const [wordData, setWordData] = useState<WordData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const [searchHistory, setSearchHistory] = useState<HistoryEntry[]>([]); // Para el historial
  
  /**
   * Maneja la lógica de búsqueda de palabras.
   * Realiza una petición a la API del diccionario, actualiza el estado de carga,
   * los datos de la palabra o los errores correspondientes.
   * @param {string} word - La palabra a buscar.
   * @returns {Promise<void>}
   */
  const handleSearch = async (word: string) => {
    setIsLoading(true);
    setError(null);
    setWordData(null);

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const responseData = await response.json();
console.log(responseData);

      if (!response.ok) {
        if (response.status === 404) {
          const apiError = responseData as WordApiError;
          throw new Error(apiError.title || `No se encontró definición para "${word}". Intenta con otra palabra o revisa la ortografía.`);
        }
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      // La API devuelve un array de resultados, tomamos el primero.
      setWordData(responseData[0]);

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocurrió un error desconocido al buscar la palabra.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <p className="text-center mt-6 text-lg">Buscando...</p>}
      {error && <p className="text-center mt-6 text-red-600 dark:text-red-400 text-lg">{error}</p>}
      {wordData && <div className="mt-8"><WordResult wordData={wordData} /></div>}
    </>
  );
}

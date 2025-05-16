"use client";

import React, { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { WordResult } from "@/components/WordResult";
import { WordData } from "@/types/Word";
import { fetchWord } from "@/utils/fetchWord";


export default function Home() {
  const [wordData, setWordData] = useState<WordData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Maneja la lógica de búsqueda de palabras.
   * Realiza una petición a la API del diccionario, actualiza el estado de carga,
   * los datos de la palabra o los errores correspondientes.
   *  word - La palabra a buscar.
   */
  const handleSearch = async (word: string) => {
    setIsLoading(true);
    setError(null);
    setWordData(null);

    try {
      const response = await fetchWord(word);      
      const responseData = await response.json();

      if (!response.ok) {
        if (response.status === 404) {
          console.log(
            `No se encontró definición para "${word}". Intenta con otra palabra o revisa la ortografía.`
          );
        }
      }
      
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
      {error && (
        <div>
          <div className="border border-0 border-red-400 rounded bg-red-100 px-4 py-3 text-red-700">
            <p>
              Lo sentimos amigo, no pudimos encontrar definiciones para la
              palabra que estabas buscando.
            </p>
          </div>
        </div>
      )}
      {wordData && (
        <div className="mt-8">
          <WordResult wordData={wordData} />
        </div>
      )}
    </>
  );
}

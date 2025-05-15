import React from 'react';

interface Props {
  onSearch: (word: string) => void;
}

/**
 * Componente de barra de búsqueda.
 * Permite al usuario ingresar una palabra y realizar una búsqueda.
 * Incluye validación para campos vacíos.
 * @param {Props} props - Propiedades del componente.
 * @param {(word: string) => void} props.onSearch - Función callback que se ejecuta al enviar el formulario con una palabra válida.
 * @returns {JSX.Element} El componente de la barra de búsqueda.
 */
export const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  /**
   * Maneja el envío del formulario de búsqueda.
   * Previene el comportamiento por defecto, valida la entrada y llama a `onSearch`.
   * @param {React.FormEvent} e - Evento del formulario.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!input.trim()) {
      setError('Por favor, escribe una palabra para buscar.');
      return;
    }
    onSearch(input.trim());
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className={`border px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-700 ${error ? 'border-red-500 dark:border-red-400' : 'border-gray-300'}`}
          placeholder="Buscar palabra..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50" type="submit">
          Buscar
        </button>
      </form>
      {error && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
};

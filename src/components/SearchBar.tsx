import React from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

interface Props {
  onSearch: (word: string) => void;
}

/**
 * Componente de barra de búsqueda.
 */
export const SearchBar = ({ onSearch }: Props) => {
  const [input, setInput] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  /**
   * Maneja el envío del formulario de búsqueda.
   * Previene el comportamiento por defecto, valida la entrada y llama a `onSearch`.
   * e- Evento del formulario.
   */
  const handleSubmit = () => {
    setError(null);
    if (!input.trim()) {
      setError("Por favor, escribe una palabra para buscar.");
      return;
    }
    onSearch(input.trim());
  };

  return (
    <div className="mb-6">
      <div className="flex gap-2">
        <Input
          placeholder="Buscar palabra..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          hasError={!!error}
        />
        <Button
          type="button"
          variant="primary"
          size="md"
          onClick={handleSubmit}
        >
          Buscar
        </Button>
      </div>
      {error && (
        <p className="text-red-500 dark:text-red-400 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

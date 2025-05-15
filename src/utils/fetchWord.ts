export const fetchWord = async (word: string) => {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  if (!response.ok) {
    throw new Error('Palabra no encontrada');
  }
  return response.json();
};

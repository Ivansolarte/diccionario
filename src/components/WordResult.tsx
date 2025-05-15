import { WordData } from '@/types/Word';
import { PlayIcon } from '@heroicons/react/24/solid';

interface Props {
  wordData: WordData;
}

/**
 * Componente para mostrar los resultados de la búsqueda de una palabra.
 * Muestra la palabra, su fonética, un botón para reproducir audio (si está disponible),
 * y sus significados categorizados por parte del discurso.
 * @param {Props} props - Propiedades del componente.
 * @param {WordData} props.wordData - Objeto con los datos de la palabra a mostrar.
 * @returns {JSX.Element} El componente renderizado con la información de la palabra.
 */
export const WordResult: React.FC<Props> = ({ wordData }) => {
  const firstAudio = wordData.phonetics?.find(p => p.audio)?.audio;

  /**
   * Reproduce el primer archivo de audio disponible para la palabra.
   */
  const playAudio = () => {
    if (firstAudio) {
      const audio = new Audio(firstAudio);
      audio.play();
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">{wordData.word}</h1>
          {wordData.phonetic && <p className="text-purple-500 dark:text-purple-400 text-xl mt-1">{wordData.phonetic}</p>}
        </div>
        {firstAudio && (
          <button
            onClick={playAudio}
            className="bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 p-3 rounded-full hover:bg-purple-200 dark:hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Reproducir audio"
          >
            <PlayIcon className="h-8 w-8" />
          </button>
        )}
      </div>

      {wordData.meanings.map((meaning, i) => (
        <div key={i} className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold italic">{meaning.partOfSpeech}</h2>
            <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          </div>
          <h3 className="text-gray-500 dark:text-gray-400">Significados</h3>
          <ul className="list-disc space-y-2 pl-5 marker:text-purple-500 dark:marker:text-purple-400">
            {meaning.definitions.map((def, j) => (
              <li key={j} className="pl-2">
                {def.definition}
                {def.example && <p className="text-gray-500 dark:text-gray-400 mt-1">{def.example}</p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

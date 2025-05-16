Este es un proyecto de Next.js iniciado con `create-next-app`.

## Primeros Pasos

Para obtener una copia local y ponerla en funcionamiento, sigue estos sencillos pasos.

### Prerrequisitos

Asegúrate de tener Node.js y npm (o yarn) instalados en tu sistema.

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone <YOUR_REPOSITORY_URL>
    cd diccionario 
    ```
    *(Replace `<YOUR_REPOSITORY_URL>` with the actual URL of your repository).*
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```
    *This command installs all necessary packages defined in the `package.json` file.*

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Estructura del Proyecto

/src
```
├── app/                 # Contiene las rutas y la UI principal de la aplicación.
│   ├── page.tsx         # Página principal de la aplicación (diccionario).
│   ├── layout.tsx       # Maquetación general (HTML base, metadatos, temas).
│   └── globals.css      # Estilos CSS globales para toda la aplicación.
├── components/          # Componentes reutilizables de la interfaz de usuario.
│   ├── SearchBar.tsx    # Barra de búsqueda para ingresar palabras.
│   ├── WordResult.tsx   # Muestra los resultados de la palabra buscada.
│   └── HistoryModal.tsx # (Asumo) Modal para el historial de búsquedas.
├── types/               # Definiciones de tipos TypeScript.
│   └── Word.ts          # Tipos para los datos de la API del diccionario.
├── utils/               # Funciones de utilidad reutilizables.
│   └── fetchWord.ts     # (Asumo) Función para obtener datos de la API.
```

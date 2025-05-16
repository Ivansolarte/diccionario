"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const fontOptions = ["Serif", "Sans", "Mono"];

export const Header = () => {
  const [font, setFont] = useState("Serif");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // cambiar clase de fuente
  useEffect(() => {
    const body = document.body;
    body.classList.remove("font-serif", "font-sans", "font-mono");

    // añade la clase
    if (font === "Serif") body.classList.add("font-serif");
    else if (font === "Sans") body.classList.add("font-sans");
    else if (font === "Mono") body.classList.add("font-mono");
    localStorage.setItem("app-font", font);
  }, [font]);

  useEffect(() => {
    const storedFont = localStorage.getItem("app-font");
    if (storedFont && fontOptions.includes(storedFont)) {
      setFont(storedFont);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null; 
  }

  return (
    <header className="flex items-center justify-between py-4 mb-6 border-b dark:border-gray-700">
      <div className="w-6 h-6 text-purple-700 dark:text-purple-400 ml-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-full h-full"
        >
          <path d="M4 3.5C4 2.672 4.672 2 5.5 2H19a1 1 0 1 1 0 2H5.5a.5.5 0 0 0-.5.5V20a1 1 0 1 1-2 0V3.5ZM7 5h11a1 1 0 0 1 1 1v15.5a.5.5 0 0 1-.5.5H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm10 2H8v13h9V7Z" />
        </svg>
      </div>

      <div className="flex items-center gap-4">
        <select
          className="bg-transparent focus:outline-none cursor-pointer dark:text-white"
          value={font}
          onChange={(e) => setFont(e.target.value)}
        >
          {fontOptions.map((opt) => (
            <option key={opt} value={opt} className="dark:text-black">
              {opt}
            </option>
          ))}
        </select>

        <div className="w-px h-6 bg-gray-400"></div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="hidden"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <div
            className={`w-10 h-5 rounded-full relative transition-colors duration-300 ease-in-out ${
              theme === "dark" ? "bg-purple-600" : "bg-gray-400"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all duration-300 ease-in-out ${
                theme === "dark" ? "left-5 -translate-x-full" : "left-5"
              }`}
            ></div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`w-10 h-10 text-gray-500 ${
              theme === "dark" ? "text-slate-50" : "text-slate-900"
            } `}
          >
            <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z" />
          </svg>
        </label>
      </div>
    </header>
  );
};

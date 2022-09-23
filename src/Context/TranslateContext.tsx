import React, { createContext, useContext, useState } from "react";
import { Children } from "../Types";

type Language = {
    title: string
    description: string
    search: string
    searchPlaceholder: string
    resultText: string
    defaultButtons: string[]
    viewMore: string
    hotTags: string
}

const textsLang: Record<string, Language> = {
  Sp: {
    title: "Buscador de imágenes",
    description:
      "Esto es una aplicación que busca imagenes dentro de la API pública de Flickr",
    search: "Buscar",
    searchPlaceholder: "Escribe una palabra...",
    resultText: "Resultado de la busqueda de",
    defaultButtons: ["Pajaro", "Serpiente", "Vaca", "Caballo"],
    viewMore: "Ver más",
    hotTags: "Claves mas buscadas"
  },
  En: {
    title: "Image searcher",
    description:
      "This is an application that searches for images within the public Flickr API.",
    search: "Search",
    searchPlaceholder: "Type a word...",
    resultText: "Result of the search for",
    defaultButtons: ["Bird", "Snake", "Cow", "Horse"],
    viewMore: "View more",
    hotTags: "Hot Tags"
  },
};

const TranslateContext = createContext({
  texts: textsLang.Sp,
  setLang: (lang: string) => {},
});

export const TranslateContextProvider = ({
  children,
}: Children): React.ReactElement => {
  const [lang, setLang] = useState("En");

  const texts = textsLang[lang];

  return (
    <TranslateContext.Provider
      value={{ texts: texts, setLang: (lang: string) => setLang(lang) }}
    >
      {children}
    </TranslateContext.Provider>
  );
};

export const useTranslateContext = () => {
  return useContext(TranslateContext).texts;
};

export const useChangeTranslateContext = () => {
  return useContext(TranslateContext).setLang;
};

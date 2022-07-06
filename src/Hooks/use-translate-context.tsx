import { useContext } from "react";
import { TranslateContext } from "Context";

export const useTranslateContext = () => {
  return useContext(TranslateContext).texts;
};

export const useChangeTranslateContext = () => {
  return useContext(TranslateContext).setLang;
};

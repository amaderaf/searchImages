import { useContext } from "react";
import TranslateContext from "../Context/TranslateContext";

const useTranslateContext = () => {
  return useContext(TranslateContext).texts;
};

export const useChangeTranslateContext = () => {
  return useContext(TranslateContext).setLang;
};

export default useTranslateContext;

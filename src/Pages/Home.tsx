import React from "react";
import { useTranslateContext } from "Hooks";
import { ResultImages } from "./ResultImages";
import useConfigContext from "Hooks/use-config-context";

export function Home(): React.ReactElement {
  const { description } = useTranslateContext();

  const { defaultTag } = useConfigContext();

  return (
    <>
      <p>{description}</p>
      <ResultImages tagProp={defaultTag} />
    </>
  );
}

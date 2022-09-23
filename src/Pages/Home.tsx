import React from "react";
import { useTranslateContext, useConfigContext } from "../Context";
import { ResultImages } from "./ResultImages";

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

import React from "react";
import { useTranslateContext } from "Hooks";

export function Home(): React.ReactElement {
  const { description } = useTranslateContext();

  return (
    <>
      <p>{description}</p>
    </>
  );
}

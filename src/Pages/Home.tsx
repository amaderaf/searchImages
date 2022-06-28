import React from "react";
import useTranslateContext from "../Hooks/use-translate-context";

export default function Home(): React.ReactElement {
  const { description } = useTranslateContext();

  return (
    <>
      <p>{description}</p>
    </>
  );
}

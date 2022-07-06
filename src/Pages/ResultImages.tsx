import React from "react";
import { useParams } from "react-router-dom";
import { useDownloadImages, useTranslateContext } from "Hooks";
import { Loading, NoImages, Div, ListOfImages} from "Components";

export function ResultImages(): React.ReactElement {
  const { tag } = useParams();

  const { images, loading } = useDownloadImages({ tag });

  const { resultText } = useTranslateContext();

  return (
    <>
      <h1>{`${resultText} ${tag}`}</h1>
      {loading ? (
        <Div mt="100px">
          <Loading />
        </Div>
      ) : images.length ? (
        <ListOfImages images={images} />
      ) : (
        <NoImages />
      )}
    </>
  );
}

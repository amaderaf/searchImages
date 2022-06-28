import React from "react";
import { useDownloadImages } from "../Hooks/use-download-images";
import ListOfImages from "../Components/Molecules/ListOfImages";
import Loading from "../Components/Atoms/Loading";
import NoImages from "../Components/Molecules/NoImages";
import { useParams } from "react-router-dom";
import { Div } from "../Components/Layout/styles";
import useTranslateContext from "../Hooks/use-translate-context";

export default function ResultImages(): React.ReactElement {
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

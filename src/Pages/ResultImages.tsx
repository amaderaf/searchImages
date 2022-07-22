import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDownloadImages, useTranslateContext } from "Hooks";
import { Loading, NoImages, Div, ListOfImages, Button } from "Components";

export function ResultImages({
  tagProp,
}: {
  tagProp?: string;
}): React.ReactElement {
  const { tagUrl } = useParams();

  const tag = tagUrl || tagProp;

  const [page, setPage] = useState(1);

  const { images, loading } = useDownloadImages({ tag, page });

  const { resultText, viewMore } = useTranslateContext();

  return (
    <>
      <h1>{`${resultText} ${tag}`}</h1>
      {loading && !images.length ? (
        <StyleLoading />
      ) : images.length ? (
        <>
          <ListOfImages images={images} />
          {loading && <StyleLoading />}
        </>
      ) : (
        <NoImages />
      )}
      <Div mb="15px">
        <Button buttonText={viewMore} handleButton={() => setPage(page + 1)} />
      </Div>
    </>
  );
}

const StyleLoading = () => {
  return (
    <>
      <Div my="100px">
        <Loading />
      </Div>
    </>
  );
};

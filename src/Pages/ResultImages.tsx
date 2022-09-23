import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDownloadImages } from "../Hooks";
import { useTranslateContext } from "../Context";
import { Loading, NoImages, Div, ListOfImages, Button } from "../Components";
import styled from "styled-components";

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
    <ResultImagesStyle>
      <h1>{`${resultText} ${tag}`}</h1>
      {loading && !images.length ? (
        <StyleLoading />
      ) : images.length ? (
        <>
          <ListOfImages images={images} />
          {loading && <StyleLoading />}
          <Div mb="15px">
            <Button
              buttonText={viewMore}
              handleButton={() => setPage(page + 1)}
            />
          </Div>
        </>
      ) : (
        <NoImages />
      )}
    </ResultImagesStyle>
  );
}

const ResultImagesStyle = styled.div`
  min-height: 100vh;
`;

const StyleLoading = () => {
  return (
    <>
      <Div mt="100px">
        <Loading />
      </Div>
    </>
  );
};

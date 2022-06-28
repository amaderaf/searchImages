import styled from "styled-components";
import Image from "./Image";

const ListOfImagesDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  margin: 20px;
`;

export default function ListOfImages({
  images,
}: {
  images: [{ url: string; title: string }] | never[];
}): React.ReactElement {
  return (
    <ListOfImagesDiv>
      {images.map((image) => {
        return <Image key={image.url} {...image} />;
      })}
    </ListOfImagesDiv>
  );
}

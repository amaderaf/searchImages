import styled from "styled-components";
import { Image } from "../../Components";
import { Images } from "../../Types";

const ListOfImagesDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  margin: 20px;
`;

export function ListOfImages({
  images,
}: {
  images: Images[];
}): React.ReactElement {
  return (
    <ListOfImagesDiv>
      {images.map((image, index) => {
        return <Image key={`image.url${index}`} {...image} />;
      })}
    </ListOfImagesDiv>
  );
}

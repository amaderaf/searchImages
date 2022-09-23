import { useHotTags } from "../../Hooks";
import { useTranslateContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { Div, ListOfButtons, Loading } from "../../Components";

export default function HotTags() {
  const { tags, loading } = useHotTags();

  const navigate = useNavigate();

  const { hotTags } = useTranslateContext();

  const handleButtonHotTags = (buttonText: string) => {
    navigate(`/search/${buttonText}`);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Div width="80%" m="0 auto" mb="20px">
          <h2>{hotTags}</h2>
          <ListOfButtons
            buttonsText={tags}
            handleButton={handleButtonHotTags}
          />
        </Div>
      )}
    </>
  );
}

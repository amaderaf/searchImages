import { Div, ListOfButtons } from "Components";
import { useHotTags, useTranslateContext } from "Hooks";
import { useNavigate } from "react-router-dom";

export function HotTags() {
  const { tags, loading } = useHotTags();

  const navigate = useNavigate();

  const { hotTags } = useTranslateContext();

  const handleButtonHotTags = (buttonText: string) => {
    navigate(`/search/${buttonText}`);
  };

  return (
    <Div width="80%" m="0 auto" mb="20px">
      <h2>{hotTags}</h2>
      <ListOfButtons buttonsText={tags} handleButton={handleButtonHotTags} />
    </Div>
  );
}

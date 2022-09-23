import styled from "styled-components";
import { useChangeTranslateContext } from "../../Context";

const  ButtonLang = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  cursor: pointer;
`;

export function Language(): React.ReactElement {

  const setLang = useChangeTranslateContext();

  return (
    <>
      <ButtonLang onClick={()=>setLang("Sp")}>🇪🇸</ButtonLang>|<ButtonLang onClick={()=>setLang("En")}>🇺🇸</ButtonLang>
    </>
  );
}

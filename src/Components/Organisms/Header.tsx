import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useConfigContext from "../../Hooks/use-config-context";
import useTranslateContext from "../../Hooks/use-translate-context";
import Button from "../Atoms/Button";
import { InputText } from "../Atoms/InputText";
import Language from "../Atoms/Language";
import LinkStyled from "../Atoms/Link";
import { Div } from "../Layout/styles";
import ListOfButtons from "../Molecules/ListOfButtons";

const Form = styled.form`
  width: 100%;
  display: flex;
  margin-bottom: 20px;

  input {
    width: 100%;
  }
`;

const SpanLanguage = styled.span`
  position: absolute;
  right: 0;
  top: 10px;
`;

export default function Header(): React.ReactElement {
  let navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current?.value) navigate(`/search/${inputRef.current?.value}`);
  };

  const handleButton = (buttonText: string) => {
    if (inputRef.current) inputRef.current.value = "";
    navigate(`/search/${buttonText}`);
  };

  const { title, search, searchPlaceholder, defaultButtons } = useTranslateContext();

  return (
    <>
      <LinkStyled to={"/"}>
        <h1>{title}</h1>
      </LinkStyled>
      <SpanLanguage>
        <Language />
      </SpanLanguage>
      <Div width={300} m="0 auto">
        <Form onSubmit={handleSubmit}>
          <InputText ref={inputRef} placeholder={searchPlaceholder} />
          <Button buttonText={search} />
        </Form>

        <ListOfButtons
          buttonsText={defaultButtons}
          handleButton={handleButton}
        />
      </Div>
    </>
  );
}

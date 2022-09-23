import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTranslateContext } from "../../Context";
import {
  Button,
  InputText,
  Language,
  LinkStyled,
  ListOfButtons,
  Div,
  Flex,
} from "../../Components";

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

export function Header(): React.ReactElement {
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

  const { title, search, searchPlaceholder, defaultButtons } =
    useTranslateContext();

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

        <Flex justify="space-between">
          <ListOfButtons
            buttonsText={defaultButtons}
            handleButton={handleButton}
          />
        </Flex>
      </Div>
    </>
  );
}

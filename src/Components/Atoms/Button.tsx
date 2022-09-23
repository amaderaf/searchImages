import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 5px 10px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export function Button({
  buttonText,
  handleButton,
}: {
  buttonText: string;
  handleButton?: (param: string) => void;
}): React.ReactElement {
  return (
    <ButtonStyled onClick={() => handleButton?.(buttonText)}>
      {buttonText}
    </ButtonStyled>
  );
}

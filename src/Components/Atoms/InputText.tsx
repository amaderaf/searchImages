import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  padding: 3px 2px;
  outline: none;
  border: 2px solid black;
`;

export const InputText = React.forwardRef<
  HTMLInputElement | null,
  { placeholder: string }
>(({ placeholder }, ref) => {
  return (
    <InputStyled ref={ref} type="text" placeholder={placeholder}></InputStyled>
  );
});

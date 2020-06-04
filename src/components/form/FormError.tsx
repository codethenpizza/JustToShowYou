import React from "react";
import styled from "styled-components";


interface IFromErrorProps {
  formErrorMessage: string
}

const Error = styled.span`
  color: #f44336;
`;

const FormError: React.FC<IFromErrorProps> = ({formErrorMessage}) => {
  return (
    <small>
      <Error>{formErrorMessage}</Error>
    </small>
  )
};

export default FormError
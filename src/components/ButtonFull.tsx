import React from "react";
import {useHistory} from 'react-router-dom'
import styled from "styled-components";

const PrimaryButton = styled.button`
  border: none;
  padding: 10px 10px;
  font-weight: bold;
  color: #fff;
  background-color: #5FB2FF;
  border-radius: 3px;
  &:hover {
    background-color:  #4179ad;
  }
  
`;

interface IButtonProps {
  action?: () => void
}


export const ButtonFull:React.FC<IButtonProps> = ({children, action}) => {
  const history = useHistory();

  return (
    <PrimaryButton onClick={() => history.push('/createPost')}>{children}</PrimaryButton>
  )
};

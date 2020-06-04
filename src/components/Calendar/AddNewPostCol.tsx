import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom'

const ColButton = styled.button`
  border-radius: 3px;
  width: 100%;
  border: none;
  color: #9f9f9f;
  background-color: #d7d7d7;
  padding: 10px 5px;
  font-weight: bold;
  opacity: 0.3;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 1;
  }
`;


const AddNewPostCol: React.FC = () => {
  const history = useHistory();
  return (
    <ColButton
      onClick={() => {history.push('/createPost')}}
    >
      Add a new post
    </ColButton>
  )
};

export default AddNewPostCol
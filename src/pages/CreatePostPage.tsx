import React from "react";
import styled from "styled-components";

//components
import PostForm from "../components/Post/PostForm";
import PostFormViewList from "../components/Post/PostFormViewList";


const FormWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostViewWrap = styled.div`
  flex-grow: 1;
`;


const CreatePostPage:React.FC = () => {
  return (
    <FormWrap>
      <PostForm />
      <PostViewWrap>
        <PostFormViewList/>
      </PostViewWrap>
    </FormWrap>
  )
};

export default CreatePostPage
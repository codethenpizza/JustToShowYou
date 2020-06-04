import React from "react";
import styled from "styled-components";

//interfaces
import {inject, observer} from "mobx-react";
import {RootStore} from "../../../stores/rootStore";

//styles
const FacebookPostWrap = styled.div`
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0,0,0,0.5);
  padding: 15px;
  width: 400px;
  border-radius: 3px;
`;

const AuthorWrap = styled.div`
 display: flex;
 align-items: flex-start;
 margin-bottom: 10px;
`;

const AuthorPhoto = styled.div`
  border-radius: 50%;
  background-image: url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
  background-position: center;
  background-size: cover;
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

const Author = styled.h2`
 color: #37a4ff;
 margin: 0;
`;

const PublicationTime = styled.h5`
  color: #b7b7b7;
  margin: 0;
`;

const PostBodyWrap = styled.div`
  min-height: 100px;
`;

const PostText = styled.p`
  overflow-wrap: anywhere;
`;


const PostFooter = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px 0 2px;
  color: #d6d6d6;
`;

interface IFacebookPostProps {
  rootStore?: RootStore
}

const FacebookPost: React.FC<IFacebookPostProps> = inject('rootStore')(observer(({rootStore}) => {

  const post = rootStore!.postFormStore.newPost;
  const userName = rootStore!.userStore.user!.name;

  return (
    <FacebookPostWrap>
      <AuthorWrap>
        <AuthorPhoto/>
        <div>
          <Author>{userName}</Author>
          <PublicationTime>12:23</PublicationTime>
        </div>
      </AuthorWrap>
      <PostBodyWrap>
        <PostText>{post.fields.title}</PostText>
        <PostText>{post.fields.text}</PostText>
      </PostBodyWrap>
      <PostFooter>
        like, share, comment
      </PostFooter>
    </FacebookPostWrap>
  )
}));

export default FacebookPost
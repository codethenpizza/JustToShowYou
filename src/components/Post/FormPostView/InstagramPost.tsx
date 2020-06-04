import React from "react";
import styled from "styled-components";

//interfaces
import {inject, observer} from "mobx-react";
import {RootStore} from "../../../stores/rootStore";

//styles
const InstagramPostWrap = styled.div`
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
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

const Author = styled.h3`
 color: #37a4ff;
 margin: 0;
`;

const SmallAuthor = styled.span`
  font-weight: bold;
`;

const SmallText = styled.h5`
  color: #b7b7b7;
  margin: 0;
`;

const InstagramPhoto = styled.div`
  background-image: url('https://images.unsplash.com/photo-1591202577311-c333d68a7a95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 400px;
  margin-bottom: 10px;
`;

const PostText = styled.p`
  overflow-wrap: anywhere;
`;


const PostFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 15px 0 2px;
  color: #d6d6d6;
`;



interface IInstagramPostProps {
  rootStore?: RootStore
}

const TwitterPost: React.FC<IInstagramPostProps> = inject('rootStore')(observer(({rootStore}) => {

  const post = rootStore!.postFormStore.newPost;
  const userName = rootStore!.userStore.user!.name;

  return (
    <InstagramPostWrap>
      <AuthorWrap>
        <AuthorPhoto/>
        <div>
          <Author>{userName}</Author>
          <SmallText>Wien</SmallText>
        </div>
      </AuthorWrap>
      <InstagramPhoto/>
      <PostText><SmallAuthor>Michele</SmallAuthor> {post.fields.title} {post.fields.text}</PostText>
      <PostFooter>
        <SmallText>12 minutes ago</SmallText>
      </PostFooter>
    </InstagramPostWrap>
  )
}));

export default TwitterPost
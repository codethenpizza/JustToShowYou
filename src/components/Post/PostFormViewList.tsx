import React from "react";
import styled from "styled-components";
import {inject, observer} from "mobx-react";
import {RootStore} from "../../stores/rootStore";

//components
import FacebookPost from "./FormPostView/FacebookPost";
import InstagramPost from "./FormPostView/InstagramPost";
import TwitterPost from "./FormPostView/TwitterPost";

//styles
const PostViewWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#36D1DC, #5B86E5);
  min-height: 100vh;
`;

const PostWrap = styled.div`
 margin: 5px;
`;


interface IPostFormViewListProps {
  rootStore?: RootStore
}

const PostFormViewList: React.FC<IPostFormViewListProps> = inject('rootStore')(observer(({rootStore}) => {

  const {checkedSocialNetworksIds}:{checkedSocialNetworksIds: number[]} = rootStore!.postFormStore;

  return (
      <PostViewWrap>
        {checkedSocialNetworksIds.map((networkId: number) => {
          switch (networkId) {
            case 1:
              return <PostWrap key={networkId}><FacebookPost/></PostWrap>;
            case 2:
              return <PostWrap key={networkId}><InstagramPost/></PostWrap>;
            case 3:
              return <PostWrap key={networkId}><TwitterPost/></PostWrap>;
            default:
              return null
          }
        })}
      </PostViewWrap>
  )
}));

export default PostFormViewList
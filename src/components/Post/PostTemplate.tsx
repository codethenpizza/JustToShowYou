import React from "react";
import styled  from "styled-components";

//interfaces
import {IPost} from "../../modules/posts/types";
import {ISocialNetworkBasicInfo} from "../../modules/socialNetworks/types";

//components
import PostHeader from "./PostHeader";

const PostWrap = styled.div`
  min-width: 200px;
  border-radius: 3px;
  margin: 10px 0;
  box-shadow: 0 0 2px rgba(0,0,0,0.5);
  cursor: default;
`;

const PostHeaderWrap = styled.div`
  margin-bottom: -3px;
`;

const PostBodyWrap = styled.div`
  padding: 10px;
`;

const PostTitle =  styled.h4`
  margin: 0;
`;

interface IPostTemplateProps {
  post: IPost
}

export const PostTemplate: React.FC<IPostTemplateProps> = ({post}) => {

  const {title, text, basicSocialNetworks, statistic} = post;

  return (
    <PostWrap>
      {
        basicSocialNetworks.map((socialNetwork: ISocialNetworkBasicInfo) => {
          let postStatistic;
          if (statistic) {
            postStatistic = statistic.find(networkStatistic => networkStatistic.socialNetworkId === socialNetwork.id)
          }
          return (
            <PostHeaderWrap key={socialNetwork.id}>
              <PostHeader
                basicSocialNetwork={socialNetwork}
                socialNetworkStatistic={postStatistic || null}
              />
            </PostHeaderWrap>
          )
        })
      }
      <PostBodyWrap>
        <PostTitle>{title}</PostTitle>
        <p>{text}</p>
      </PostBodyWrap>
    </PostWrap>
  )
};

export default PostTemplate
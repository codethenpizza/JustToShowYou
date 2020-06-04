import React from "react";
import styled from "styled-components";

//  interfaces
import {INews} from "../../modules/news/types";

// components
import NewsHeader from "./NewsHeader";


const SingleNewsWrap = styled.div`
  width: 300px;
  box-shadow: 0 0 4px rgba(0,0,0,0.5);
  height: 80px;
  border-radius: 3px;
  transition: all 1s ease-out;
  cursor: default;
  &:hover {
     box-shadow: 0 0 8px rgba(0,0,0,0.5);
  }
`;

const SingleNewsBody = styled.div`
  padding: 10px;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
`;

interface INewsSingleProps {
  news: INews
}

export const NewsSingle: React.FC<INewsSingleProps> = ({news}) => {
  return (
    <SingleNewsWrap>
      <NewsHeader
        newsId={news.id}
        basicSocialNetwork={news.basicSocialNetworks}
        newsTitle={news.title}/>
      <SingleNewsBody>
        <span>{news.text}</span>
      </SingleNewsBody>
    </SingleNewsWrap>
  )
};

export default NewsSingle
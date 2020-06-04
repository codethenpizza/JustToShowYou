import React from "react";
import styled from "styled-components";
import {ISocialNetworkBasicInfo} from "../../modules/socialNetworks/types";

import CardHeader from "../CardHeader";
import {inject, observer} from "mobx-react";
import {RootStore} from "../../stores/rootStore";


//styles
const NewsHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  & button {
    position: absolute;
    right: -21px;
    top: -2px;
  }
`;

const Title = styled.h5`
  margin: 0px;  
`;

const DiscardNews = styled.button`
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
  &:before, :after  {
    position: absolute;
    left: 7px;
    top: 0px;
    content: ' ';
    height: 17px;
    width: 2px;
    background-color: #fff;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }  
`;


interface INewsHeaderProps {
  rootStore?: RootStore
  newsId: number
  newsTitle: string
  basicSocialNetwork: ISocialNetworkBasicInfo
}

const NewsHeader: React.FC<INewsHeaderProps> = inject('rootStore')(observer(({rootStore, newsId, newsTitle, basicSocialNetwork}) => {

  const {discardNews} = rootStore!.newsStore;

  return (
    <CardHeader basicSocialNetwork={basicSocialNetwork}>
      <NewsHeaderWrap>
        <Title>
          {newsTitle}
        </Title>
        <DiscardNews onClick={() => discardNews(newsId)} />
      </NewsHeaderWrap>
    </CardHeader>
  )
}));


export default NewsHeader
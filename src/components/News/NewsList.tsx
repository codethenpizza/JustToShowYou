import React from "react";
import styled from "styled-components";
import {observer, inject} from "mobx-react";

//interfaces
import {INews} from "../../modules/news/types";
import {RootStore} from "../../stores/rootStore";

//components
import NewsSingle from "./NewsSingle";


//styles
const SectionTitle = styled.h2`
  color: #9c9c9c;
  margin: 0px;
  cursor: default;
`;

const NewsListWrapper = styled.div`
margin: 10px 0;
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  grid-gap: 15px 21px;
`;
const NewsSingleWrap = styled.div`
  width: auto;
  margin: 0px 10px;
  
`;


interface INewsListProps {
  rootStore?: RootStore
}

const NewsList: React.FC<INewsListProps> = inject('rootStore')(observer(({rootStore}) => {
  return (
    <>
      <SectionTitle>We have news for you!</SectionTitle>
      <NewsListWrapper>
        {rootStore!.newsStore.newsList.map((news: INews) => {
          return (
            <NewsSingleWrap key={news.id}>
              <NewsSingle news={news}/>
            </NewsSingleWrap>
          )
        })}
      </NewsListWrapper>
    </>
  )
}));

export default NewsList
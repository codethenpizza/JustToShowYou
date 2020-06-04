import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import styled from "styled-components";
import moment from "moment";

//components
import CalendarDate from "./CalendarDate";
import PostTemplate from "../Post/PostTemplate";
import AddNewPostCol from "./AddNewPostCol";

import {RootStore} from "../../stores/rootStore";
import {IPost} from "../../modules/posts/types";


interface IColWarpProps {
  isEmpty: boolean
}

//styles
const ColWrap = styled.div<IColWarpProps>`
  width: auto;
  height: auto;
  border: 0.5px solid #f0f0f0;
  padding: 10px;
  background-color: ${props => props.isEmpty ? '#f5f5f5' : 'transparent'};
  min-height: 200px;
`;




interface IDayColProps {
  rootStore?: RootStore
  dateOfCol: moment.Moment;
}

const DayCol: React.FC<IDayColProps> = inject('rootStore')(observer(({rootStore, dateOfCol}) => {

  const posts = (rootStore!.postStore.getByDate(dateOfCol));

  const getFormattedDate = (date: moment.Moment) => {
    return {
      day: date.format('DD'),
      dayOfWeek: date.format('dddd'),
      month: date.format('MMM')
    }
  };

  const getPosts = () => {
    return posts.map((post: IPost) => {
      return (
        <PostTemplate post={post} key={post.id}/>
      )
    })
  };

  return (
    <ColWrap isEmpty={!posts.length}>
      <CalendarDate date={getFormattedDate(dateOfCol)}/>
      {posts.length > 0 && getPosts()}
      <AddNewPostCol/>
    </ColWrap>
  );
}));

export default DayCol

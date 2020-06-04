import React from "react";
import styled from "styled-components";
import moment from "moment";
// import {useHistory} from 'react-router-dom'

//components
import DayCol from "./DayCol";
import {ButtonFull} from "../ButtonFull";

//styles
const SectionWrap = styled.section`
  padding: 20px 0;
`;

const SectionTitle = styled.h2`
  color: #9c9c9c;
  margin: 0px;
  cursor: default;
`;


const ColsWrap = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 21px 0;
`;

const ButtonWrap = styled.div`
  margin: 5px 0px;
`;

const Calendar: React.FC = () => {
  const daysToShow: number = 7;

  const showDaysCols = () => {
    const cols = [];
    let startDate:moment.Moment = moment('2020-05-30 13:00:00');
    for (let i = 0; i < daysToShow; i++) {
      const dayDayOfCol = moment(startDate); //prevent pass one object for all cols
      cols.push( <DayCol dateOfCol={dayDayOfCol}  key={i} /> );
      startDate = startDate.add(1, 'day')
    }
    return cols
  };

  return (
    <SectionWrap>
      <SectionTitle>Next days</SectionTitle>
      <ButtonWrap>
        {/*<ButtonFull content={'New post'}>New post</ButtonFull>*/}
        <ButtonFull>New post</ButtonFull>
      </ButtonWrap>
      {/* filters */}
      <ColsWrap>
        {showDaysCols()}
      </ColsWrap>
    </SectionWrap>
  )
};

export default Calendar
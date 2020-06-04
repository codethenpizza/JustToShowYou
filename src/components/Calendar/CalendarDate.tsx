import React from "react";
import styled from "styled-components";


//style
const DateWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: default;
`;

const DateInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.h2`
  margin: 0;
  font-size: 3em;
  color: #333333;
`;

const Month = styled.h4`
  margin: 0;
  color: #A9A9A9;
  font-style: italic;
`;
const DayOfWeek = styled.h3`
  margin: 0;
  color: #333333;
`;


interface CalendarDateProps {
  date: {
    day: string,
    dayOfWeek: string,
    month: string
  }
}

const CalendarDate: React.FC<CalendarDateProps> = ({date}) => {
  return (
    <DateWrap>
      <Date>{date.day}</Date>
      <DateInfoWrap>
        <Month>{date.month}</Month>
        <DayOfWeek>{date.dayOfWeek}</DayOfWeek>
      </DateInfoWrap>
    </DateWrap>
  )
};

export default CalendarDate
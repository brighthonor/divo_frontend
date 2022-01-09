import styled from 'styled-components';
import { Calendar } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import * as locales from 'react-date-range/dist/locale';
import { useState } from 'react';
import { borderColor } from '../styles/ColorStyle';
import { addDays } from 'date-fns';

const toThursday = (date) => {
  return addDays(date, date.getDay() ? 4-date.getDay() : -3)
}

const getMonthWeek = (date) => {
  const thursday = toThursday(date)
  var [ day, month, year ] = [ thursday.getDate(), thursday.getMonth()+1, thursday.getFullYear() ]
  if(month < 10){
    month = '0' + month;
  }
  return `${year}-${month} ${Math.floor((day+6)/7)}주차`
}

export const dateDisplay = (date, scale) => {
  let [ year, month, day ] = [ date.getFullYear(), date.getMonth()+1, date.getDate() ]
  if(month < 10){
    month = '0' + month;
  }
  if(day < 10){
    day = '0' + day;
  }
  switch(scale){
    case 0:
      return `${year}-${month}-${day}`;
    case 1:
      return getMonthWeek(date);
    case 2:
      return `${year}-${month}`;
    default:
      break;
  }
}

function Picker({ scale, date, setDate }){

  const [ show, setShow ] = useState(false);

  const onClick = () => setShow(s => !s);

  return (
    <>
      <S.Date onClick={onClick}>
        {dateDisplay(date, scale)}
        <S.Icon>
          <i class="fas fa-angle-down"></i>
        </S.Icon>
      </S.Date>
      {show &&
        <div>
          <S.CalStyle>
            <Calendar
              color={'black'} 
              date={date}
              onChange={d => setDate(d)}
              locale={locales['ko']}
              direction="horizontal"
              maxDate={new Date()}
            />
          </S.CalStyle>
        </div>
      }
    </>
  );

}

export default Picker;

const S = {};

S.CalStyle = styled.div`
  position: absolute;
  background: white;
  border: solid ${borderColor};
  z-index: 999;
  transform: translate(-100%, 28.5px);
  display: flex;
  flex-flow: column;

  .rdrDayToday .rdrDayNumber span:after{
    background: black;
  }

  .rdrCalendarWrapper:not(.rdrDateRangeWrapper) .rdrDayHovered .rdrDayNumber:after{
    border: 1.5px solid currentColor;
  }

  .rdrPprevButton, .rdrNextButton{
    background: none;
  }

  .rdrMonthPicker select, .rdrMonthPicker select option{
    font-family: 'Hahmlet';
  }

  .rdrYearPicker select, .rdrYearPicker select option{
    font-family: 'Hahmlet';
  }

  .rdrMonthPicker select, .rdrYearPicker select{
    font-weight: bold;
    font-family: 'Hahmlet';
  }

  .rdrMonthPicker select option, .rdrYearPicker select option{
    background: #f5f5f5;
  }

  .rdrYearPicker select::-webkit-scrollbar {
    width: 10px;
    height: 8px;
    border-radius: 6px;
    background: rgb(255, 255, 255, 0.4);
  }
  .rdrYearPicker select::-webkit-scrollbar-thumb {
    background-color: rgb(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`;

S.Date = styled.div`
  padding: 10px;
  display: flex;
  margin-left: 10px;
  &:hover{
    cursor: pointer;
  }
`;

S.Icon = styled.div`
  margin-left: 10px;
`;
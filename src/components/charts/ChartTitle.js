import { addDays } from 'date-fns';
import copy from 'fast-copy';
import styled from 'styled-components';
import { menuTemplate } from '../../Dummy';
import { dateDisplay } from '../Picker';
import { subMenus } from '../SubSidebar';

function addMonths(date, months) {
  var d = date.getDate();
  let newDate = copy(date);
  newDate.setMonth(newDate.getMonth() + +months);
  if (newDate.getDate() !== d) {
    newDate.setDate(0);
  }
  return newDate;
}

function ChartTitle({ scale, date, isTime=0, subMenu, isGraph=0 }){
  const timeUnit = ['일', '주', '개월']
  const timeRange = (scale, date) => {
    const startDate = scale === 0 ? addDays(date, -6) : scale === 1 ? addDays(date, -42) : addMonths(date, -6);
    const endDate = date
    return `${dateDisplay(startDate, scale)} ~ ${dateDisplay(endDate, scale)}`;
  }
  return (
    isGraph ? 
      <S.ChartTitle>
        {!scale ? '일간' : scale===1 ? '주간' : '월간'} {menuTemplate[subMenu]}
      </S.ChartTitle> 
    :   
    !isTime ?
      <S.ChartTitle>
        최근 7{timeUnit[scale]} {subMenus[0][subMenu]}
        <S.Date>
          {timeRange(scale, date)}
        </S.Date>
      </S.ChartTitle>
      :
      (<S.ChartTitle>
        {subMenus[0][subMenu]}
        <S.Date>
          {dateDisplay(date, scale)}
        </S.Date>
      </S.ChartTitle>)
  );
}

export default ChartTitle;

const S = {};

S.ChartTitle = styled.div`
  display: flex;
  align-items: end;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
`;

S.Date = styled.div`
  color: grey;
  font-weight: normal;
  font-size: 14px;
  margin-left: 10px;
`;

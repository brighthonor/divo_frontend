import styled from 'styled-components';
import PointChart from '../charts/PointChart';
import { salesData } from '../../Dummy';
import { useState } from 'react';
import { addDays } from 'date-fns';
import Setting from '../Setting';
import ChartTitle from '../charts/ChartTitle';

function PointGraph({ subMenu, toggle, setToggle }){

  const [ scale, setScale ] = useState(0); //0: day, 1: week, 2: month

  const [ startDate, setStartDate ] = useState(addDays(new Date(), -8));

  const [ endDate, setEndDate ] = useState(addDays(new Date(), -1));

  return (
    <S.Body>
      <Setting
        toggle={toggle}
        setToggle={setToggle}
        scale={scale}
        setScale={setScale}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <ChartTitle scale={scale} subMenu={subMenu} isGraph={1} />
      <S.Chart>
        <PointChart 
          data={[salesData[scale][0]]}
          unit={subMenu===2 ? '%' : '원'}
        />
      </S.Chart>
    </S.Body>
  );
}

export default PointGraph;

const S = {};

S.Body = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-flow: column;
  padding: 0 40px;
`;

S.Chart = styled.div`
  flex: 1;
  height: 500px;
  padding-bottom: 10px;
`;
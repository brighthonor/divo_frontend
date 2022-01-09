import styled from 'styled-components';
import PointChart from '../charts/PointChart';
import Stats from '../Stats';
import { dates, captions, salesNumbers, salesData, revisitRatio } from '../../Dummy';
import { useMemo, useState } from 'react';
import { addDays } from 'date-fns';
import ChartTitle from '../charts/ChartTitle';
import Setting from '../Setting';

function PointStat({ subMenu, toggle, setToggle }){

  const [ scale, setScale ] = useState(0); //0: day, 1: week, 2: month

  const [ date, setDate ] = useState(addDays(new Date(), -1));

  const [ show, setShow ] = useState([
    [0, 0, 0],
    [0, 0],
    [0]
  ]);

  const chartData = useMemo(() => {
    let newChartData = [salesData[scale][0]];
    for(var i=1; i<4-scale; i++){
      if(show[scale][i-1]) newChartData.push(salesData[scale][i]);
    }
    return newChartData;
  }, [show, scale]);

  return (
    <S.Body>
      <Setting 
        toggle={toggle}
        setToggle={setToggle}
        scale={scale}
        setScale={setScale}
        date={date}
        setDate={setDate}
      />
      <Stats 
        dates={dates[scale]}
        captions={captions[subMenu][scale]}
        numbers={subMenu===2 ? revisitRatio[scale] : salesNumbers[scale]}
        show={show}
        setShow={setShow}
        scale={scale}
      />
      <ChartTitle scale={scale} date={date} subMenu={subMenu} />
      <S.Chart>
        <PointChart 
          data={chartData}
          unit={subMenu===2 ? '%' : '원'}
        />
      </S.Chart>
    </S.Body>
  );
}

export default PointStat;

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


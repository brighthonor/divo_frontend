import styled from 'styled-components';
import { dates, salesPerTimeData, captions, salesPerTimeNumbers } from '../../Dummy';
import { useMemo, useState } from 'react';
import { addDays } from 'date-fns';
import Stats from '../Stats';
import ChartTitle from '../charts/ChartTitle';
import PerTimeChart from '../charts/PerTimeChart';
import Setting from '../Setting';

function PerTimeStat({ subMenu, toggle, setToggle }){

  const [ scale, setScale ] = useState(0); //0: day, 1: week, 2: month

  const [ date, setDate ] = useState(addDays(new Date(), -1));

  const [ show, setShow ] = useState([
    [0, 0, 0, 0],
    [0, 0, 0],
    [0, 0]
  ]);

  const chartData = useMemo(() => {
    let newChartData = [salesPerTimeData[scale][0]];
    for(var i=1; i<5-scale; i++){
      if(show[scale][i-1]) newChartData.push(salesPerTimeData[scale][i]);
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
        numbers={salesPerTimeNumbers[scale]}
        scale={scale}
        show={show}
        setShow={setShow}
        isTime={1}
      />
      <ChartTitle scale={scale} date={date} isTime={1} subMenu={subMenu}/>
      <S.Chart>
        <PerTimeChart 
          data={chartData}
          unit={subMenu===3 ? '%' : subMenu===4 ? '원' : '건'}
        />
      </S.Chart>
    </S.Body>
  );
}

export default PerTimeStat;

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
  height: 400px;
  padding-bottom: 10px;
`;


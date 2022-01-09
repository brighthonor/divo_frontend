import styled from 'styled-components';
import { borderColor } from '../styles/ColorStyle';
import Picker from './Picker';
import RangePicker from './RangePicker';
import TimeScale from './TimeScale';

function Setting({ toggle, setToggle, scale, setScale, date, setDate, startDate, setStartDate, endDate, setEndDate, isPerDay = false }){
  if(!toggle)
    return (
      <S.Settings>
        <S.Toggle>
          <S.Menu onClick={() => setToggle(0)} toggle={toggle} i={0}>상세 통계</S.Menu>
          <S.Menu onClick={() => setToggle(1)} toggle={toggle} i={1}>그래프</S.Menu>
        </S.Toggle>
        <S.Flex>
          <TimeScale 
            scale={scale}
            setScale={setScale}
            isPerDay={isPerDay}
          />
          <Picker 
            scale={scale}
            date={date}
            setDate={setDate}
          />
        </S.Flex>
      </S.Settings>
    );
  
  return (
    <S.Settings>
      <S.Toggle>
        <S.Menu onClick={() => setToggle(0)} toggle={toggle} i={0}>상세 통계</S.Menu>
        <S.Menu onClick={() => setToggle(1)} toggle={toggle} i={1}>그래프</S.Menu>
      </S.Toggle>
      <S.Flex>
        <TimeScale 
          scale={scale}
          setScale={setScale}
        />
        <RangePicker 
          scale={scale}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </S.Flex>
    </S.Settings>
  );
}

export default Setting;

const S = {};

S.Settings = styled.div`
  border-bottom: solid ${borderColor};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  min-height: 60px;
`;

S.Toggle = styled.div`
  display: flex;
  align-items: center;
  color: grey;
  font-size: 22px;
`;

S.Menu = styled.div`
  ${props => !props.i ? 
    `padding: 0 10px 0 20px; border-right: solid ${borderColor};` :
    `padding: 0 20px 0 10px;`
  }
  ${props => props.i === props.toggle ? 'font-weight: bold; color: black;' : ''}
  &:hover{
    cursor: pointer;
    color: black;
    font-weight: bold;
  }
`;

S.Flex = styled.div`
  display: flex;
  align-items: center;
`;
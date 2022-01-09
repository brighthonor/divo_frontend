import styled from 'styled-components';
import { borderColor } from '../styles/ColorStyle';
import Picker from './Picker';

function RangePicker({ scale, startDate, endDate, setStartDate, setEndDate }){  
  return (
    <>
      <Picker
        scale={scale}
        date={startDate}
        setDate={setStartDate}
      />
      <S.To />
      <Picker
        scale={scale}
        date={endDate}
        setDate={setEndDate}
      />
    </>
  );
}

export default RangePicker;

const S = {};

S.To = styled.div`
  margin-left: 10px;
  border-right: solid ${borderColor};
  height: 17px;
  vertical-align: center;
`;
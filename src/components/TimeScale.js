import styled from 'styled-components';
import { borderColor } from '../styles/ColorStyle';

function TimeScale({ scale, setScale, isPerDay }){
  const onClick = (idx) => {
    if(idx !== scale) setScale(idx);
  }

  return (
    <S.Hover>
      {!isPerDay &&
        <S.TimeScale first={true} scale={scale} i={0} onClick={() => onClick(0)}>
          일
        </S.TimeScale>
      }
      <S.TimeScale scale={scale} i={1} onClick={() => onClick(1)}>
        주
      </S.TimeScale>
      <S.TimeScale scale={scale} i={2} last={true} onClick={() => onClick(2)}>
        월
      </S.TimeScale>
    </S.Hover>
  );
}

export default TimeScale;

const S = {};

S.Hover = styled.div`
  &:hover{
    cursor: pointer;
  }
  display: flex;
`;

S.TimeScale = styled.div`
  margin: 10px 0;
  padding: 0 10px;
  color: grey;
  ${props => props.first ? `border-right: solid ${borderColor};` : ''}
  ${props => props.last ? `border-left: solid ${borderColor};` : ''}
  ${props => props.scale === props.i ? 'color: black; font-weight: bold;' : ''}
  &:hover{
    color: black;
    font-weight: bold;
  }
`;
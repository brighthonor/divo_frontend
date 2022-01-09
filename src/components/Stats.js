import copy from 'fast-copy';
import styled from 'styled-components'
import { borderColor } from '../styles/ColorStyle';

function Stats({ dates, captions, numbers, show, setShow, scale, isTime=0 }){
  const onClick = (idx) => {
    let newShow = copy(show);
    for(var i=0; i<newShow[scale].length; i++) newShow[scale][i] = i===idx ? 1-newShow[scale][i] : 0;
    setShow(newShow);
  }

  return (
    <S.Stats>
      {dates.map((date, i) => {
        return (
          <S.StatBox key={i} show={show[scale]} i={i+isTime} onClick={() => onClick(i-2+isTime)}>
            <S.Title>{date}</S.Title>
            <S.Description>{captions[i]}</S.Description>
            <S.Data>{numbers[i]}</S.Data>
          </S.StatBox>
        );
      })}
    </S.Stats>
  );
}

export default Stats;

const S = {};


S.Stats = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  border-bottom: solid ${borderColor};
`;

S.StatBox = styled.div`
  padding: 10px 20px;
  border-right: solid ${borderColor};
  display: flex;
  flex-flow: column;
  width: 260px;
  &:hover{
    cursor: pointer;
    background: #f5f5f5;
  }
  ${props => props.i>=2 && props.show[props.i-2] ? 'background: #f5f5f5;' : ''}
`;

S.Title = styled.div`
  font-size: 16px;
`;

S.Description = styled.div`
  font-size: 14px;
  padding: 10px 0 20px 0;
  color: grey;
`;

S.Data = styled.div`
  font-size: 26px;
  font-weight: bold;
`;

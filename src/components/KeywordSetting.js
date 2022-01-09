import styled from 'styled-components';
import { borderColor } from '../styles/ColorStyle';

function KeywordSetting({ type, setType }){  
  return (
    <S.Settings>
      <S.Toggle>
        <S.Menu onClick={() => setType(0)} type={type} i={0}>브랜드 <S.Small>키워드</S.Small></S.Menu>
        <S.Menu onClick={() => setType(1)} type={type} i={1}>연관 <S.Small>키워드</S.Small></S.Menu>
        <S.Menu onClick={() => setType(2)} type={type} i={2}>상권 <S.Small>키워드</S.Small></S.Menu>
        <S.Menu onClick={() => setType(3)} type={type} i={3}>업종 <S.Small>키워드</S.Small></S.Menu>
        <S.Menu onClick={() => setType(4)} type={type} i={4}>경쟁 <S.Small>키워드</S.Small></S.Menu>
      </S.Toggle>
      <S.Flex>
        <S.Button>초기화</S.Button>
        <S.Button>변경</S.Button>
      </S.Flex>
    </S.Settings>
  );
}

export default KeywordSetting;

const S = {};

S.Small = styled.span`
  font-size: 16px;
`;

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
  ${props => props.i ? 
    `padding: 0 10px 0 10px; border-left: solid ${borderColor};` :
    `padding: 0 10px 0 20px;`
  }
  ${props => props.i === props.type ? 'font-weight: bold; color: black;' : ''}
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

S.Button = styled.button`
  font-size: 16px;
  margin-right: 20px;
  font-family: 'Hahmlet';
  background: none;
  border: none;
  &:hover{
    cursor: pointer;
    font-weight: bold;
  }
`;
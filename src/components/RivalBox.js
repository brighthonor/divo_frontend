import { useState } from 'react';
import styled from 'styled-components';
import { borderColor } from '../styles/ColorStyle';
import copy from 'fast-copy';

function RivalBox({ rival, i, rivalData, setRivalData }){

  const [ userInput, setUserInput ] = useState('');
  const onChange = (e) => setUserInput(e.target.value);
  const addToRivalList = (i) => {
    if(userInput.replace(/ /g, '') === '') return;
    if(rivalData[i].list.includes(userInput)){
      alert('이미 포함된 키워드입니다');
      return;
    }
    let newRivalData = copy(rivalData);
    newRivalData[i].list = [userInput].concat(newRivalData[i].list);
    setRivalData(newRivalData);
    setUserInput('');
  };

  const onKeyPress = (e) => {
    if(e.key === 'Enter'){
      addToRivalList(i);
    }
  }

  const deleteFromRivalList = (i, j) => {
    let newRivalData = copy(rivalData);
    newRivalData[i].list.splice(j, 1);
    setRivalData(newRivalData);
  }

  const deleteRival = (i) => {
    let newRivalData = copy(rivalData);
    newRivalData.splice(i, 1);
    setRivalData(newRivalData);
  }

  return (
    <S.Layout>
      <S.Layout fill={true}>
          <S.BrandBox>
            <S.Word>{rival.brand}</S.Word>
            <S.Close onClick={() => deleteRival(i)}>
              <i class="fas fa-times"></i>
            </S.Close>
          </S.BrandBox>
        </S.Layout>
      <S.Layout fill={true}>
        <S.WordBox input={true}>
          <S.Input placeholder={"키워드를 입력해주세요"} value={userInput} onChange={onChange} onKeyPress={onKeyPress}/>
          <S.Close onClick={() => addToRivalList(i)}>
            <i class="fas fa-plus"></i>
          </S.Close>
        </S.WordBox>
      </S.Layout>
      <div>
        {rival.list.map((word, j) => (
          <S.Layout fill={true} key={word}>
            <S.WordBox>
              <S.Word>{word}</S.Word>
              <S.Close onClick={() => deleteFromRivalList(i, j)}>
                <i class="fas fa-times"></i>
              </S.Close>
            </S.WordBox>
          </S.Layout>
        ))}
      </div>
    </S.Layout>
  );
}

export default RivalBox;

const S = {};

S.Word = styled.span`
  height: 24px;
`;

S.Body = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-flow: column;
  padding: 0 40px;
  padding-bottom: 40px;
`;

S.Layout = styled.div`
  width: ${props => props.fill ? 100 : 33.33}%;
  padding: 0 20px 40px 20px;
  ${props => props.fill ? 'padding: 0 0 20px 0;' : ''}
`;

S.WordBox = styled.div`
  border: solid ${borderColor};
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  ${props => props.input ? 'border-color: grey;': ''}
`;

S.WordContainer = styled.div`
  display: flex;
  padding-top: 40px;
  overflow-y: auto;
  flex-wrap: wrap;
`;

S.Close = styled.div`
  color: grey;
  &:hover{
    cursor: pointer;
    color: black;
  }
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.Input = styled.input`
  padding: 0;
  margin: 0;
  font-size: 18px;
  font-family: 'Hahmlet';
  border: none;
  background: none;
  height: 24px;
  &:focus{
    outline: none;
  }
`;

S.BrandBox = styled.div`
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
`;
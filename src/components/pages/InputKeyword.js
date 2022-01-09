import copy from 'fast-copy';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { comp, wordList } from '../../Dummy';
import { borderColor } from '../../styles/ColorStyle';
import KeywordSetting from '../KeywordSetting';
import NewRivalBox from '../NewRivalBox';
import RivalBox from '../RivalBox';

function InputKeyword(){

  const [ type, setType ] = useState(0); //0: 브랜드, 1: 연관, 2: 상권, 3: 엽종, 4: 경쟁

  const [ list, setList ] = useState(wordList[type]);

  const [ rivalData, setRivalData ] = useState(comp);

  useEffect(() => {
    if(type!==4) setList(wordList[type]);
  }, [type]);

  const [ userInput, setUserInput ] = useState('');

  const onChange = (e) => setUserInput(e.target.value);

  const addToList = (e) => {
    if(userInput.replace(/ /g, '') === '') return;
    if(list.includes(userInput)){
      alert('이미 포함된 키워드입니다');
      return;
    }
    let newList = copy(list);
    newList = [userInput].concat(newList);
    setList(newList);
    setUserInput('');
  };

  const onKeyPress = (e) => {
    if(e.key === 'Enter'){
      addToList(e);
    }
  }

  const deleteFromList = (i) => {
    let newList = copy(list);
    newList.splice(i, 1);
    setList(newList);
  }

  if(type!==4) return (
    <S.Body>
      <KeywordSetting type={type} setType={setType} />
      <S.WordContainer>
        <S.Layout>
          <S.WordBox input={true}>
            <S.Input placeholder={"키워드를 입력해주세요"} value={userInput} onChange={onChange} onKeyPress={onKeyPress}/>
            <S.Close onClick={addToList}>
              <i class="fas fa-plus"></i>
            </S.Close>
          </S.WordBox>
        </S.Layout>
        {list.map((word, i) => (
          <S.Layout key={i}>
            <S.WordBox>
              <S.Word>{word}</S.Word>
              <S.Close onClick={() => deleteFromList(i)}>
                <i class="fas fa-times"></i>
              </S.Close>
            </S.WordBox>
          </S.Layout>
        ))}
      </S.WordContainer>
    </S.Body>
  );

  return (
    <S.Body>
      <KeywordSetting type={type} setType={setType} />
      <S.RivalContainer>
        {rivalData.map((rival, i) => (
          <RivalBox rival={rival} key={i} i={i} rivalData={rivalData} setRivalData={setRivalData} />
        ))}
        <NewRivalBox rivalData={rivalData} setRivalData={setRivalData} />
      </S.RivalContainer>
    </S.Body>
  );
}

export default InputKeyword;

const S = {};


S.RivalContainer = styled.div`
  display: flex;
  padding-top: 40px;
  flex: 1;
  overflow-x: auto;
`;

S.Word = styled.span`
  height: 24px;
`;

S.Body = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-flow: column;
  padding: 0 40px;
  padding-bottom: 40px;
  min-width: 0;
`;

S.Layout = styled.div`
  min-width: ${props => props.fill ? 100 : 33.33}%;
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

S.Brand = styled.div`
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  padding-bottom: 40px;
`;
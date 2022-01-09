import styled from 'styled-components';
import { borderColor } from '../styles/ColorStyle';

export const subMenus = [
  ['매출액 추이', '평균 결제단가', '재방문자 매출 비율', '시간별 매출 비율', '시간별 평균 결제단가', '시간별 결제건수', '요일별 매출 비율', '요일별 평균 결제단가', '요일별 결제건수'],
  ['키워드-매출 분석', '키워드 입력'],
  []
]

function SubSidebar({ menu, subMenu, setSubMenu }){
  const onClick = (idx) => {
    if(subMenu !== idx){
      setSubMenu(idx);
    }
  }

  return (
    <>
      <S.Body>
        {subMenus[menu].map((name, i) => {
          return (
            <S.Menu i={i} subMenu={subMenu} onClick={() => onClick(i)} key={i}>
              {name}
            </S.Menu>
          );
        })}
      </S.Body>
      {/* <S.Line /> */}
    </>
  );
}

export default SubSidebar;

const S = {};

S.Body = styled.div`
  height: 100%;
  min-width: 200px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

S.Menu = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
  padding: 10px 0;
  color: grey;
  &:hover{
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
  ${props => props.i === props.subMenu ? 'color: black; font-weight: bold;' : ''}
`;

S.Line = styled.div`
  height: 200px;
  border-right: solid ${borderColor};
`;
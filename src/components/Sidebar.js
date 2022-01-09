import styled from 'styled-components';
import { borderColor } from '../styles/ColorStyle';

function Sidebar({ menu, setMenu, setSubMenu }){
  const onClick = (idx) =>{
    if(menu !== idx){
      setMenu(idx);
      setSubMenu(0);
    }
  }

  const icons = ['fas fa-coins', 'fas fa-chart-line', 'fab fa-apple']

  return (
    <>
      <S.Body>
        {icons.map((icon, i) => {
          return (
            <S.Icon menu={menu} i={i} onClick={() => onClick(i)} key={i}>
              <i class={icon}></i>
            </S.Icon>
          );
        })}
      </S.Body>
      {/* <S.Line /> */}
    </>
  );
}

export default Sidebar;

const S = {};

S.Body = styled.div`
  height: 100%;
  min-width: 80px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

S.Icon = styled.div`
  margin: 5px 0;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 50%;
  &:hover{
    cursor: pointer;
    background: black;
    color: white;
  }
  ${props => props.menu === props.i ? 'background: black; color: white;' : ''}
`;

S.Line = styled.div`
  height: 200px;
  border-right: solid ${borderColor};
`;
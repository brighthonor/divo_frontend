import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import SubSidebar from './components/SubSidebar';
import { useState } from 'react';
import PointPage from './components/pages/PointPage';
import PerTimePage from './components/pages/PerTimePage';
import PerDayPage from './components/pages/PerDayPage';
import InputKeyword from './components/pages/InputKeyword';

function App() {
  const [ menu, setMenu ] = useState(0);
  const [ subMenu, setSubMenu ] = useState(0);

  const Content = (menu, subMenu) => {
    switch(menu){
      case 0:
        if(subMenu<=2) return <PointPage subMenu={subMenu} />;
        else if(subMenu<=5) return <PerTimePage subMenu={subMenu} />;
        else return <PerDayPage subMenu={subMenu} />;

      case 1:
        if(!subMenu) return;
        else return <InputKeyword />;

      case 2:
        break;

      default:
        break;
    }
  }

  return (
    <>
      <GlobalStyles />
      <S.Div>
        <Sidebar menu={menu} setMenu={setMenu} setSubMenu={setSubMenu} />
        <SubSidebar menu={menu} subMenu={subMenu} setSubMenu={setSubMenu} />
        {Content(menu, subMenu)}
      </S.Div>
    </>
  );
}

export default App;

const S = {};

S.Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
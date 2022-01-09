import { useState } from 'react';
import PointStat from './PointStat';
import PointGraph from './PointGraph';

function PointPage({ subMenu }){
  const [ toggle, setToggle ] = useState(0);

  if(toggle) return <PointGraph subMenu={subMenu} toggle={toggle} setToggle={setToggle} />;
  return <PointStat subMenu={subMenu} toggle={toggle} setToggle={setToggle} />;
}

export default PointPage;
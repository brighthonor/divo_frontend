import { useState } from 'react';
import PerTimeStat from './PerTimeStat';
import PerTimeGraph from './PerTimeGraph';

function PerTimePage({ subMenu }){
  const [ toggle, setToggle ] = useState(0);

  if(toggle) return <PerTimeGraph subMenu={subMenu} toggle={toggle} setToggle={setToggle} />;
  return <PerTimeStat subMenu={subMenu} toggle={toggle} setToggle={setToggle} />;
}

export default PerTimePage;
import { useState } from 'react';
import PerDayStat from './PerDayStat';
import PerDayGraph from './PerDayGraph';

function PerDayPage({ subMenu }){
  const [ toggle, setToggle ] = useState(0);

  if(toggle) return <PerDayGraph subMenu={subMenu} toggle={toggle} setToggle={setToggle} />;
  return <PerDayStat subMenu={subMenu} toggle={toggle} setToggle={setToggle} />;
}

export default PerDayPage;
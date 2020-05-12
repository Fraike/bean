import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Button,{ButtonType, ButtonSize} from './components/Button/button';
import Menu from './components/Menu/Menu';
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from './components/Menu/subMenu';
import Icon from "./components/Icon/icon";

library.add(fas)

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Icon icon="arrow-left" theme="danger" size='10x'></Icon>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large} onClick={(e)=>{e.preventDefault()}}>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large} >Hello</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Small} href="http://www.baidu.com" >Hello</Button>
          <br/>
          <Menu defaultIndex={'0'} onSelect={(index) => {}} mode="vertical" defaultOpenSunMenus={['3']}>
              <MenuItem>
                  link 1
              </MenuItem>
              <MenuItem>
                  link 1
              </MenuItem>
              <MenuItem>
                  link 1
              </MenuItem>
              <SubMenu title="sub">
                  <MenuItem>dropdown1</MenuItem>
                  <MenuItem>dropdown2</MenuItem>
                  <MenuItem>dropdown3</MenuItem>
              </SubMenu>
          </Menu>
      </header>
        <dialog open>123</dialog>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Button,{ButtonType, ButtonSize} from './components/Button/button';
import Menu from './components/Menu/Menu';
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from './components/Menu/subMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType={ButtonType.Default} size={ButtonSize.Large} onClick={(e)=>{e.preventDefault()}}>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large} >Hello</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Small} href="http://www.baidu.com" >Hello</Button>
          <br/>
          <Menu defaultIndex={'0'} onSelect={(index) => {}} mode="vertical">
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

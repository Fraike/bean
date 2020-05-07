import React from 'react';
import './App.css';
import Button,{ButtonType, ButtonSize} from './components/Button/button';
import Menu from './components/Menu/Menu';
import MenuItem from "./components/Menu/MenuItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType={ButtonType.Default} size={ButtonSize.Large} onClick={(e)=>{e.preventDefault()}}>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large} >Hello</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Small} href="http://www.baidu.com" >Hello</Button>
          <br/>
          <Menu defaultIndex={0}>
              <MenuItem>
                  link 1
              </MenuItem>
              <MenuItem>
                  link 1
              </MenuItem>
              <MenuItem>
                  link 1
              </MenuItem>
          </Menu>
      </header>
    </div>
  );
}

export default App;

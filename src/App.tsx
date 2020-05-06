import React from 'react';
import './App.css';
import Button,{ButtonType, ButtonSize} from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType={ButtonType.Default} size={ButtonSize.Large} onClick={(e)=>{e.preventDefault()}}>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large} >Hello</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Small} href="http://www.baidu.com" >Hello</Button>
      </header>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import Result from './result';
import Main from './main';
import SuperMain from './superMain';
import Login from './login';

function App() {
  return (
    <div className="App">
      
    {
      
      (sessionStorage.getItem('user') === 'Police Headquater')?
      <SuperMain />:
      <Main />
    }
    </div>
  );
}

export default App;

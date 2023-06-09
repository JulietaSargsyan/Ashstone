import React, { useState, useRef, useEffect } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (value) => {
    setInputValue(value);
  };

  return (
    <div className="App">
      <Header handleChange={handleChange}/>
      <Main inputValue={inputValue}/>
    </div>
  );
}

export default App;

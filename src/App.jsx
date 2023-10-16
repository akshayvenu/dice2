import React, { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

const App = () => {
  const [isStart, setisStart] = useState(false)
  
  const toggle = ()=>{
    setisStart((prev)=>!prev)
  }
  return (
   <>
   {isStart ? <GamePlay toggle={toggle}/>:<StartGame toggle={toggle} /> }
   </>
  );
};

export default App;

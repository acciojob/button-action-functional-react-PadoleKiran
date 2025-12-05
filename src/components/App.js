import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [val,setVal] = useState(false);
  // let [num, setNum] = useState(1);

  // function ValState(){
  //   // setNum(num+1);
  //   let nextNum = num + 1;
  //   setNum(nextNum);

  //   if(num%2 === 0){
  //     setVal(true);
  //   }
  //   else{
  //     setVal(false);
  //   }
  // }
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button id="click" onClick={()=>setVal(true)}>Click me</button>
      {val && (<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>)}
    </div>
  );
}


export default App;

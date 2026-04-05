import Step from "./Step";
import "../styles/index.css";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function sendMessage(messages, count) {
  return `Step ${count}: ${messages[count - 1]}`;
}

function App() {
  const [count, setCount] = useState(1);
  const [isOpen, setOpen] = useState(true);

  function handleBtnClick(event) {
    let name = event.currentTarget.name;

    if(name === 'close'){
      setOpen(!isOpen);
    }
   
    if (name === 'next' && count < 3) {
      setCount((c) => c + 1);      
    }else if (name === 'prev' && count > 1) {
      setCount((c) => c - 1);      
    }
  }

  let message = sendMessage(messages,count);

  return (
    <div className="steps">
      <Step count={count} isOpen={isOpen} handleBtnClick={handleBtnClick} message={message} />
    </div>
  );
}

export default App;

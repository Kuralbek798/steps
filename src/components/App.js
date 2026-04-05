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
  const [count, setCount] = useState(Number(localStorage.getItem('stepCount'))|| 1);
  const [isOpen, setOpen] = useState(true);

  function handleBtnClick(event) {
    let name = event.currentTarget.name;

    if (name === 'close') {
      setOpen((is) => !is);
    }

    if (name === 'next' && count < 3) {
      const newCount = count + 1;
      setCount(newCount);
      localStorage.setItem('stepCount', newCount);
    } else if (name === 'prev' && count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      localStorage.setItem('stepCount', newCount);
    }
  }

  let message = sendMessage(messages, count);

  return (
    <div className="steps">
      <Step count={count} isOpen={isOpen} handleBtnClick={handleBtnClick} message={message} />
    </div>
  );
}

export default App;

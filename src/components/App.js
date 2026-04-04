import Step from "./Step";
import "../styles/index.css";
import { useState } from "react";


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


function sendMessage(messages, count) {
  return messages[count - 1];
}


function App() {
  const [count, setCount] = useState(1);

  function handleSteps(direction) {
    console.log(direction);
    if (direction === 'next' && count < 3) {

      setCount((c) => c + 1);
      console.log(count);
    }
    if (direction === 'prev' && count > 1) {

      setCount((c) => c - 1);
      console.log(count);
    }
  }

  let message = sendMessage(messages,count);

  return (
    <div className="steps">
      <Step count={count} handleSteps={handleSteps} message={message} />
    </div>
  );
}

export default App;

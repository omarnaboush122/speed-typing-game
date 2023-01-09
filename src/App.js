import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining,setTimeRemaining] = useState(5);

  useEffect(()=> {
    setTimeout(()=> {
      if(timeRemaining > 0) {
        setTimeRemaining(time => time - 1);
      }
    },1000)
  },[timeRemaining])

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const calculateWordCount = () => {
    const wordArray = text.trim().split(" ");
    return wordArray.filter(word => word !== "").length;
  }
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={calculateWordCount}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;

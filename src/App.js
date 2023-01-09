import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount,setWordCount] = useState(0);

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false);
      setWordCount(calculateWordCount(text));
    }
  }, [timeRemaining, isTimeRunning]);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const calculateWordCount = (text) => {
    const wordArray = text.trim().split(" ");
    return wordArray.filter((word) => word !== "").length;
  };

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => setIsTimeRunning(true)}>Start</button>
      <h1>Word count: {wordCount} </h1>
    </div>
  );
}

export default App;

import { useState } from "react";

function App() {
  const [text, setText] = useState("");

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
      <h4>Time remaining: ???</h4>
      <button onClick={console.log(calculateWordCount())}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;

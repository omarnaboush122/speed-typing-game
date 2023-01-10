import { useState, useEffect, useRef } from "react";

const useWordGame = (startTime = 10) => {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
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

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(startTime);
    setText("");
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  return {text,isTimeRunning,timeRemaining,wordCount,inputRef,handleChange,startGame}
}

export default useWordGame;
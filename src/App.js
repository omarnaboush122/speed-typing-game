import useWordGame from "./hooks/useWordGame";

function App() {
  const {text,isTimeRunning,timeRemaining,wordCount,inputRef,handleChange,startGame} = useWordGame()
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        disabled={!isTimeRunning}
        onChange={handleChange}
        value={text}
        ref={inputRef}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;

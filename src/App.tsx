import "./App.css";
import BoardComponent from "./components/BoardComponent";
import { useEffect, useState } from "react";
import { Board } from "./models/Board";

const App = () => {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initializeCells();
    setBoard(newBoard);
  }

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};

export default App;

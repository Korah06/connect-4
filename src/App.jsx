import { useState } from 'react';
import { Cell } from './components/cell';

const Player = {
  One: '🔴',
  Two: '🟡',
};

function App() {
  const [board, setBoard] = useState(Array.from({ length: 42 }, () => null));
  const [player, setPlayer] = useState(Player.One);

  const handleCellClick = (index) => {
    const newBoard = [...board];
    if (newBoard[index] === null) {
      newBoard[index] = player;
    }

    setBoard(newBoard);
    setPlayer(player === Player.One ? Player.Two : Player.One);
  };

  const checkWinner = (board) => {};

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-8">CONNECT 4</h1>
        <div className="grid grid-cols-7 gap-4 p-4">
          {board.map((o, index) => (
            <Cell
              key={index}
              index={index}
              cell={o}
              onClick={handleCellClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

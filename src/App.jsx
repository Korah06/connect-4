import { useState } from 'react';
import { Cell } from './components/cell';

const Player = {
  One: '🔴',
  Two: '🟡',
};

function App() {
  const [board, setBoard] = useState(Array.from({ length: 42 }, () => null));
  const [player, setPlayer] = useState(Player.One);
  const [winner, setWinner] = useState(null);

  const handleCellClick = (index) => {
    const newBoard = [...board];
    if (newBoard[index] === null) {
      newBoard[index] = player;
    }
    setWinner(checkForWin(newBoard));
    setBoard(newBoard);
    setPlayer(player === Player.One ? Player.Two : Player.One);
  };

  const checkForWin = (board) => {
    const rows = 6;
    const cols = 7;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col <= cols - 4; col++) {
        const player = board[row * cols + col];
        if (!player) continue;
        if (
          player === board[row * cols + col + 1] &&
          player === board[row * cols + col + 2] &&
          player === board[row * cols + col + 3]
        ) {
          return player;
        }
      }
    }

    for (let col = 0; col < cols; col++) {
      for (let row = 0; row <= rows - 4; row++) {
        const player = board[row * cols + col];
        if (!player) continue;
        if (
          player === board[(row + 1) * cols + col] &&
          player === board[(row + 2) * cols + col] &&
          player === board[(row + 3) * cols + col]
        ) {
          return player;
        }
      }
    }

    for (let row = 0; row <= rows - 4; row++) {
      for (let col = 0; col <= cols - 4; col++) {
        const player = board[row * cols + col];
        if (!player) continue;
        if (
          player === board[(row + 1) * cols + col + 1] &&
          player === board[(row + 2) * cols + col + 2] &&
          player === board[(row + 3) * cols + col + 3]
        ) {
          return player;
        }
      }
    }

    for (let row = 0; row <= rows - 4; row++) {
      for (let col = cols - 1; col >= 3; col--) {
        const player = board[row * cols + col];
        if (!player) continue;
        if (
          player === board[(row + 1) * cols + col - 1] &&
          player === board[(row + 2) * cols + col - 2] &&
          player === board[(row + 3) * cols + col - 3]
        ) {
          return player;
        }
      }
    }

    return null;
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">CONNECT 4</h1>
        <div className="grid grid-cols-7 gap-4 p-4">
          {board.map((cell, index) => (
            <Cell
              key={index}
              index={index}
              cell={cell}
              onClick={handleCellClick}
            />
          ))}
        </div>
        {winner !== null ? (
          <h2 className="text-2xl font-bold">{winner} wins!</h2>
        ) : (
          <h2 className="text-3xl font-bold">Is {player} turn!</h2>
        )}
      </div>
    </>
  );
}

export default App;

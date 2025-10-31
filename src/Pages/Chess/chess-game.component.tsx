import React from 'react';
import './chess-game.component.css';
import ChessBoardComponent from './chess-board/chess-board.component';

function ChessGameComponent() {
  return (
    <div className="chess-game">
        <ChessBoardComponent />
    </div>

  );
}

export default ChessGameComponent;

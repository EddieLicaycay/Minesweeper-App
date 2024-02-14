import React, { useEffect, useState } from 'react';
import createBoard from '../board/boardMatrix';
import Cell from './cell';

const Board = () => {
  const[grid, setGrid] = useState([]);

  useEffect(() => {
    function freshBoard() {
      const newBoard =  createBoard(5, 5, 10);
      setGrid(newBoard);
    }
    freshBoard();
  }, []);

  if (!grid.board) {
    return <div>Loading Board...</div>
  }

  return grid.board.map(singleRow => {
      return (
        <div style={{ display: 'flex'}}>
          {singleRow.map(singleBlock => {
            return <Cell details={singleBlock} />
          })}
        </div>
      )
    });
}

export default Board;
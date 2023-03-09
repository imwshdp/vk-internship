import React, { useEffect, useContext } from 'react';

import SapperContext from '../../context';
import { checkIsGameEnded } from '../../context/actions/game/checkIsGameEnded';

import Cell from '../Cell';
import css from './index.module.css';

const Board = () => {

  // context data
  let {
    board,
    cells, setCells,
    bombs,
    isGameEnded, setIsGameEnded,
    setIsWin,
    isFirstClick
  } = useContext(SapperContext)

  const gameEndCheck = () => {
    checkIsGameEnded(board, cells, bombs, setIsGameEnded, setIsWin)
  }

  useEffect(() => {
    if (!isGameEnded && isFirstClick) {
      gameEndCheck()
    }
  }, [cells])

  return (
    <section className={css.Board}>
      {board.map((row, indexRow) =>
        <div
          key={indexRow + Date.now()}
          className={css.Row}
        >

          {row.map((cell, indexColumn) =>
            <Cell
              key={indexColumn + Date.now()}
              x={indexRow}
              y={indexColumn}
            />
          )}

        </div>
      )}
    </section>
  );
}

export default Board;
import React, { useState, useEffect, useContext } from 'react';
import SapperContext from '../../context';
import boardSize from '../../context/actions/bombs/bombsQuantity';
import BOMB from '../../context/actions/bombs/bombValue';
import { checkIsGameEnded } from '../../context/functions/game/checkIsGameEnded';
import createFilledState from '../../utils/createFilledState';
import { getCopyOfState } from '../../utils/getCopyOfState';
import Cell from '../Cell';
import css from './index.module.css';

const Board = () => {

  // context data
  let {
    board,
    cells, setCells,
    bombs,
    isGameEnded, setIsGameEnded,
    isFirstClick
  } = useContext(SapperContext)

  const gameEndCheck = () => {
    checkIsGameEnded(board, cells, bombs, setIsGameEnded, setCells)
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
import React, { useContext, useEffect, useState } from 'react';
import SapperContext from '../../context';
import { setBombs } from '../../context/actions/bombs/setBombs';
import BOMB from '../../context/actions/bombs/bombValue';
import css from './index.module.css';
import { updateCellsState } from '../../context/functions/cells/updateCellState';
import { openNearestCells } from '../../context/functions/cells/openNearestCells';
import { setEndGame } from '../../context/actions/game/setEndGame';

const Cell = ({ x, y }) => {

  // context data
  let {
    board, setBoard,
    cells, setCells,
    bombs,
    setUserBombs,
    isFirstClick, setIsFirstClick,
    firstCellX, setFirstCellX,
    firstCellY, setFirstCellY,
    setIsGameEnded,
  } = useContext(SapperContext)

  // cell state (0 - closed, 1 - opened, 2 - flagged, 3 - questioned)
  const cellState = cells[x][y]

  // open near empty cells after opening cell
  const openCells = (x, y) => {
    setCells(openNearestCells(x, y, cells, board))
  }

  // update one cell state
  const setCellState = (x, y, value) => {
    setCells(updateCellsState(x, y, cells, value))
  }

  const leftClick = (e) => {

    // if first click => refresh states
    if (!isFirstClick) {
      setFirstCellX(x)
      setFirstCellY(y)

      // add bombs to board and refresh board state
      setBoard(setBombs(x, y, bombs))

      setIsFirstClick(true)
    } else {

      // else handle click
      if (board[x][y] === BOMB) {
        // end game after bomb opening
        setEndGame(setIsGameEnded, setCells, cells)
      } else {
        // open nearest cells
        openCells(x, y)
      }
    }
  }

  const rightClick = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (cellState === 0) {
      setCellState(x, y, 2)
      setUserBombs(prev => prev - 1)
    }
    if (cellState === 2) {
      setCellState(x, y, 3)
      setUserBombs(prev => prev + 1)
    }
    if (cellState === 3) { setCellState(x, y, 0) }
  }

  useEffect(() => {
    // if first click is registered
    if (isFirstClick && x === firstCellX && y === firstCellY) {
      openCells(firstCellX, firstCellY)

      // null coords states
      setFirstCellX(null)
      setFirstCellY(null)
    }

  }, [isFirstClick])

  return (
    <div
      className={css.Cell}
      onClick={(e) => leftClick(e)}
      onContextMenu={(e) => rightClick(e)}
      style={cellState === 1 ? { backgroundColor: 'pink' } : {}}
    // style={board[x][y] === BOMB ? { backgroundColor: 'red' } : {}}
    >
      {cellState === 0 ? board[x][y] : ""}
      {cellState === 1 && board[x][y]}
      {cellState === 2 && 'F'}
      {cellState === 3 && '?'}
    </div>
  );
}

export default Cell;
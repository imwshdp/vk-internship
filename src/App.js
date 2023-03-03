import React, { useRef, useState } from 'react';
import SapperContext from './context'
import createFilledState from './utils/createFilledState';
import Game from './components/Game';
import './styles/index.css';

const App = () => {

  const [board, setBoard] = useState(createFilledState(0))
  const [cells, setCells] = useState(createFilledState(0))

  const [bombs, setBombs] = useState(253)
  const [userBombs, setUserBombs] = useState(253)

  const [isFirstClick, setIsFirstClick] = useState(null)
  const [firstCellX, setFirstCellX] = useState(null)
  const [firstCellY, setFirstCellY] = useState(null)

  const [isGameEnded, setIsGameEnded] = useState(false)

  const timer = useRef({})

  return (
    <SapperContext.Provider value={{

      // states
      board: board,
      cells: cells,
      bombs: bombs,
      userBombs: userBombs,

      isFirstClick: isFirstClick,
      firstCellX: firstCellX,
      firstCellY: firstCellY,

      isGameEnded: isGameEnded,
      timer: timer,

      // setters
      setBoard: setBoard,
      setCells: setCells,
      setUserBombs: setUserBombs,

      setIsFirstClick: setIsFirstClick,
      setFirstCellX: setFirstCellX,
      setFirstCellY: setFirstCellY,

      setIsGameEnded: setIsGameEnded,
    }}>
      <Game />
    </SapperContext.Provider>
  );
}

export default App;

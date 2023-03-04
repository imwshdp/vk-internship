import React, { useState, useContext, useEffect } from 'react';
import SapperContext from '../../context';

import css from './index.module.css';

const Modal = () => {

  // context data
  const { isGameEnded, isWin } = useContext(SapperContext)

  // modal visibility state
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!isGameEnded) {
      setVisible(false)

    } else {
      setVisible(true)
      setTimeout(() => {
        setVisible(false)
      }, 3000)
    }
  }, [isGameEnded])

  return (
    <div className={visible === true ? css.ModalActive : css.Modal}>
      <div className={css.ModalContent}>
        {isWin ? "Победа!😎" : "Проигрыш!🙁"}
      </div>
    </div>
  );
}

export default Modal;
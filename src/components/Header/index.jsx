import React from 'react';

import './index.module.css';

const Header = () => {
  return (
    <header>
      <h1>Игра "Сапёр"</h1>
      <details>
        <summary>Правила игры</summary>
        <p>
          Игровое поле разделено на клетки, некоторые из которых заминированы.
          Для победы вам нужно открыть все клетки, не попадая на мины.
        </p>

        <p>
          В открытых клетках отображаются цифры, каждая цифра — это количество мин в соседних клетках.
          С помощью этой информации можно определить в каких клетках содержатся мины.
        </p>

        <p>
          Предполагаемую клетку с миной можно пометить флажком с помощью правой кнопки мыши.
          Еще одно нажатие правой кнопкой мыши пометит клетку знаком вопроса, который не будет
          изменять счетчик оставшегося количества мин.
        </p>

        <p>
          Для старта новой игры нажмите на кнопку со смайликом.
          В левом углу отображается оставшееся количество мин, в правом — игровой таймер.
        </p>

      </details>
    </header>
  );
}

export default Header;
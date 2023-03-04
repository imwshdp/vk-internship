import React from 'react';

import css from './index.module.css';

const Footer = () => {
  return (
    <footer>
      <span>Стажировка <span className={css.VK}>VK</span>. Профильное задание на позицию "Фронтенд-разработчик".</span>
      <h2>
        Репозиторий <a href='https://github.com/imwshdp/vk-internship'>GitHub</a>
      </h2>
    </footer>
  );
}

export default Footer;
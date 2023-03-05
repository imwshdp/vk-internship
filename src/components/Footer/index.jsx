import React from 'react';

import css from './index.module.css';

const Footer = () => {
  return (
    <footer>
      <span>Стажировка <span className={css.VK}>VK</span>. Профильное задание на позицию "Фронтенд-разработчик".</span>
      <h2>
        <a href='https://github.com/imwshdp/vk-internship'>Репозиторий <span className={css.GitHub}>GitHub</span></a>
      </h2>
    </footer>
  );
}

export default Footer;
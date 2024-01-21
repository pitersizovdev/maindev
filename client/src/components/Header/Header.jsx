import React from 'react'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header>
      <h1>Greenlist</h1>

      <nav>
        <ul>
            <li>Главная</li>
            <li>Новости</li>
            <li>Обмен</li>
            <button>Профиль</button>
        </ul>
      </nav>
    </header>
  )
}

export default Header

import React from 'react'
import styles from './styles.module.scss'
import { ReactComponent as IconSmall } from '../../assets/iconSmall.svg'

const LittleMenu = (props) => {
  return (
    <div className={styles.littleMenu}>
      <IconSmall />
      <a href="#services" onClick={props.closeBurger}>
        Услуги
      </a>
      <a href="#benefits" onClick={props.closeBurger}>
        Преимущества
      </a>
      <a href="#contacts" onClick={props.closeBurger}>
        Контакты
      </a>
      <button
        onClick={(e) => {
          props.closeBurger(e)
          props.openFormClick(e)
        }}
        className={styles.application}
      >
        ОСТАВИТЬ ЗАЯВКУ
      </button>
      <a className={styles.contacts} href="#contacts" onClick={props.closeBurger}>
        СВЯЗАТЬСЯ
      </a>
    </div>
  )
}

export default LittleMenu

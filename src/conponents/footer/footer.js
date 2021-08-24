import React from 'react'
import styles from './styles.module.scss'

const Footer = () => {
  return (
    <footer id="contacts">
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>КОНТАКТЫ</h2>
        </div>
        <div className={styles.info}>
          <div>
            <div>Звоните</div>
            <div>8 (495) 969-27-75</div>
          </div>
          <div>
            <div>Пишите</div>
            <div>rodon@rodon.su</div>
          </div>
          <div>
            <div>Москва</div>
            <div>109542, Рязанский пр-кт, д.86/1, стр.2</div>
          </div>
          <div>
            <div>Москва</div>
            <div>115093, Серпуховский пер., д. 1-3-5, стр.3</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

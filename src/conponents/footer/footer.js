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
            <a href="tel:8-495-969-27-75">8 (495) 969-27-75</a>
          </div>
          <div>
            <div>Пишите</div>
            <a href="mailto:rodon@rodon.su">rodon@rodon.su</a>
          </div>
          <div>
            <div>Москва</div>
            <a href="https://www.google.ru/maps/place/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D0%BF%D1%80.,+86%2F1,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+109444/@55.7080837,37.8296109,18.81z/data=!4m13!1m7!3m6!1s0x414ab5f17e3a87e3:0x18e27adab2dd5e4!2z0KDRj9C30LDQvdGB0LrQuNC5INC_0YAuLCA4Ni8xLCDQnNC-0YHQutCy0LAsIDEwOTQ0NA!3b1!8m2!3d55.708031!4d37.830272!3m4!1s0x414ab5f17e3a87e3:0x18e27adab2dd5e4!8m2!3d55.708031!4d37.830272">
              109542, Рязанский пр-кт, д.86/1, стр.2
            </a>
          </div>
          <div>
            <div>Москва</div>
            <a href="https://www.google.ru/maps/place/%D0%A1%D0%B5%D1%80%D0%BF%D1%83%D1%85%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BF%D0%B5%D1%80.,+1,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+115093/@55.7260401,37.6219414,17z/data=!3m1!4b1!4m5!3m4!1s0x46b54b10a3835d6b:0xae3afa6509536a20!8m2!3d55.7260371!4d37.6241301">
              115093, Серпуховский пер., д. 1-3-5, стр.3
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

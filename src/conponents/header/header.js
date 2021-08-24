import React from 'react'
import styles from './styles.module.scss'
import headerMask from '../../assets/headerMask.png'
import { ReactComponent as IconBig } from '../../assets/iconBig.svg'
import { ReactComponent as IconMiddle } from '../../assets/iconMiddle.svg'
import { ReactComponent as IconSmall } from '../../assets/iconSmall.svg'
import useResize from '../../utils/useResize'
import BidForm from '../bidForm/bidForm'
import LittleMenu from '../littleMenu/littleMenu'

const Header = () => {
  const [openedBurger, setOpenedBurger] = React.useState(false)
  const [openedForm, setOpenedForm] = React.useState(false)

  const width = useResize()

  const openFormClick = (e) => {
    e.stopPropagation()
    setOpenedForm(!openedForm)
  }

  const burgerClick = (e) => {
    e.stopPropagation()
    setOpenedBurger(!openedBurger)
  }

  return (
    <div id="header" className={styles.header} onClick={() => setOpenedForm(false)}>
      {openedForm && <BidForm closeForm={() => setOpenedForm(false)} />}
      {openedBurger && <LittleMenu openFormClick={openFormClick} closeBurger={burgerClick} />}
      <img src={headerMask} alt="headerMask" className={styles.mask} />

      <header>
        <div className={styles.title}>
          <a href="#header">РОДОН</a>
        </div>
        {width >= 960 ? (
          <>
            <div className={styles.menu}>
              <a href="#services">Услуги</a>
              <a href="#benefits">Преимущества</a>
              <a href="#contacts">Контакты</a>
            </div>
            <div className={styles.buttons}>
              <a className={styles.contacts} href="#contacts">
                СВЯЗАТЬСЯ
              </a>
              <button onClick={openFormClick} className={styles.application}>
                ОСТАВИТЬ ЗАЯВКУ
              </button>
            </div>
          </>
        ) : (
          <>
            <button onClick={burgerClick} className={`${styles.navToggle} ${openedBurger ? styles.opened : false}`}>
              <span className={styles.top} />
              <span className={styles.middle} />
              <span className={styles.bottom} />
            </button>
          </>
        )}
      </header>

      <div className={styles.main}>
        {width < 960 && <IconSmall className={styles.iconSmall} />}
        <div className={styles.title}>
          ВАША
          <span> БЕЗОПАСНОСТЬ </span>— НАША ПРОФЕССИЯ
        </div>
        <div className={styles.iconField}>
          {width > 1750 && <IconBig />}
          {width <= 1750 && width >= 960 && <IconMiddle />}
          <div className={styles.description}>
            <p>
              Наша главная задача — оказание профессиональных услуг на высшем уровне. Группа компаний «РОДОН» предлагает
              большой выбор действий по защите физических лиц и недвижимого имущества. У нас работают специалисты с
              богатым опытом работы.
            </p>
            <p>
              Некоммерческая организация Группа компаний «РОДОН» включает в себя ряд юридических лиц, среди них —
              «МАГНУМ». Это не просто новый бренд, а новое элитное подразделение, сконцентрировавшее в себе все лучшее,
              что мы накопили за годы работы: лучшие кадры и огромный практический опыт безупречного выполнения
              договорных обязательств.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

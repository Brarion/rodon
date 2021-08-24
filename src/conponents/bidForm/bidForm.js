import React from 'react'
import styles from './styles.module.scss'
import Input from './input/input'
import useResize from '../../utils/useResize'

const variants = [
  {
    id: 0,
    text: 'Охрана стационарных объектов',
  },
  {
    id: 1,
    text: 'Сопровождение грузов',
  },
  {
    id: 2,
    text: 'Оборудование объектов инженерными системами охраны',
  },
  {
    id: 3,
    text: 'Программа «Экстренная помощь»',
  },
  {
    id: 4,
    text: 'Выделение сотрудников охраны',
  },
  {
    id: 5,
    text: 'Личная охрана',
  },
]

const BidForm = (props) => {
  const [formSent, setFormSent] = React.useState(false)

  const [name, setName] = React.useState('')
  const [nameError, setNameError] = React.useState('')

  const [variant, setVariant] = React.useState(null)

  const [phone, setPhone] = React.useState('')
  const [phoneError, setPhoneError] = React.useState('')

  const width = useResize()

  const validateName = () => {
    setNameError(!name ? 'Неверно заполнено поле' : '')
  }

  const validatePhone = () => {
    setPhoneError(!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone) ? 'Неверно заполнено поле' : '')
  }

  if (formSent) {
    return (
      <div className={`${styles.form} ${styles.formSent}`}>
        <form>
          <h2>СПАСИБО ЗА ЗАЯВКУ</h2>
          <p className={styles.pBLack}>
            Ваша заявка отправлена! Наши специалисты свяжутся с Вами в самое ближайшее время.{' '}
          </p>
          <button type="button" onClick={() => props.closeForm()}>
            ХОРОШО, СПАСИБО
          </button>
          <p>Нажимая на кнопку «Отправить заявку», вы даёте согласие на обработку своих персональных данных</p>
        </form>
      </div>
    )
  }

  return (
    <div className={styles.form} onClick={(e) => e.stopPropagation()}>
      <>
        <button onClick={() => props.closeForm()} className={styles.navToggle}>
          <span className={styles.top} />
          <span className={styles.bottom} />
        </button>
      </>
      <form>
        <h2>ОСТАВЬТЕ ЗАЯВКУ</h2>
        <Input
          value={name}
          onChange={setName}
          onBlur={validateName}
          error={!!nameError}
          errorText={nameError}
          placeholder={'Ваше имя'}
        />
        <Input
          value={phone}
          onChange={setPhone}
          onBlur={validatePhone}
          error={!!phoneError}
          errorText={phoneError}
          placeholder={'Телефон'}
        />
        <div className={styles.variants}>
          <h3>Выберите услугу</h3>
          <div className={styles.list}>
            {variants.map((item) => (
              <div
                onClick={() => setVariant(item.id)}
                key={item.id}
                className={item.id === variant ? styles.selected : ''}
              >
                <div className={styles.circle} />
                <div className={styles.text}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.submit}>
          <button type="button" onClick={() => setFormSent(true)}>
            ОТПРАВИТЬ ЗАЯВКУ
          </button>
          <p>Нажимая на кнопку «Отправить заявку», вы даёте согласие на обработку своих персональных данных</p>
        </div>
      </form>
      {width >= 800 && (
        <div className={styles.contacts}>
          <h3>Наши контакты</h3>
          <div>
            <p>8 (495) 969-27-75</p>
            <p>rodon@rodon.su</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default BidForm
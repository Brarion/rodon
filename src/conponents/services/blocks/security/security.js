import React from 'react'
import styles from './styles.module.scss'

import { ReactComponent as SecurityHouse } from '../../../../assets/securityHouse.svg'

const Security = () => {
  return (
    <div className={styles.security}>
      <h3>Охрана стационарных объектов</h3>
      <div className={styles.list}>
        <ul>
          <li>Строительные комплексы</li>
          <li>Базы отдыха</li>
          <li>Офисы</li>
          <li>Банки</li>
        </ul>
        <ul>
          <li>Складские комплексы</li>
          <li>Автосалоны</li>
          <li>Образовательные учреждения</li>
        </ul>
      </div>
      <p>
        Посредством организации стационарных постов охраны и патрульных групп, способных гарантировать пресечение
        попыток несанкционированного доступа на объект охраны, контрольно-пропускной режим автотранспорта,
        патрулирование охраняемой территории
      </p>
      <SecurityHouse className={styles.house} />
    </div>
  )
}

export default Security

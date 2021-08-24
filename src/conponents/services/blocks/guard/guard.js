import React from 'react'
import styles from './styles.module.scss'

import { ReactComponent as GuardIcon } from '../../../../assets/guard.svg'

const Guard = () => {
  return (
    <div className={styles.guard}>
      <GuardIcon className={styles.guardIcon} />
      <h3>Выделение сотрудников охраны</h3>
      <p>для обеспечения безопасности при проведении массовых мероприятий, организуемых клиентом</p>
    </div>
  )
}

export default Guard

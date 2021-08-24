import React from 'react'
import styles from './styles.module.scss'

import { ReactComponent as TransportIcon } from '../../../../assets/transport.svg'

const Transport = () => {
  return (
    <div className={styles.transport}>
      <TransportIcon className={styles.transportIcon} />
      <h3>Сопровождение грузов</h3>
      <p>с предоставлением сотрудников охраны</p>
    </div>
  )
}

export default Transport

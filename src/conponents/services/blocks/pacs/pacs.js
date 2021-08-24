import React from 'react'
import styles from './styles.module.scss'

import { ReactComponent as Camera } from '../../../../assets/camera.svg'

const Pacs = () => {
  return (
    <div className={styles.pacs}>
      <Camera className={styles.camera} />
      <h3>Оборудование объектов инженерными системами охраны</h3>
      <p>видеонаблюдение, СКУД, датчики движения и т.д.</p>
    </div>
  )
}

export default Pacs

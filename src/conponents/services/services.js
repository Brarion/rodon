import React from 'react'
import styles from './styles.module.scss'
import Security from './blocks/security/security'
import Guard from './blocks/guard/guard'
import Pacs from './blocks/pacs/pacs'
import Transport from './blocks/transport/transport'
import Help from './blocks/help/help'
import PersonalGuard from './blocks/personalGuard/personalGuard'

const Services = () => {
  return (
    <div id="services" className={styles.services}>
      <div className={styles.title}>
        <h2>УСЛУГИ</h2>
      </div>
      <div className={styles.masonry}>
        <div>
          <Security />
          <Pacs />
          <Help />
        </div>
        <div>
          <Guard />
          <Transport />
          <PersonalGuard />
        </div>
      </div>
    </div>
  )
}

export default Services

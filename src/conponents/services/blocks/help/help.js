import React from 'react'
import styles from './styles.module.scss'

import { ReactComponent as HelpIcon } from '../../../../assets/help.svg'

const Help = () => {
  return (
    <div className={styles.help}>
      <HelpIcon className={styles.helpIcon} />
      <h3>Программа «Экстренная помощь»</h3>
      <p>
        предоставление охранных услуг на случай чрезвычайных обстоятельств, юридическую помощь, а также информационную
        поддержку.
      </p>
    </div>
  )
}

export default Help

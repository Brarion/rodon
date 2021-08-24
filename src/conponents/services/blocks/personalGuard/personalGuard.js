import React from 'react'
import styles from './styles.module.scss'

import { ReactComponent as PersonalGuardIcon } from '../../../../assets/personalGuard.svg'

const PersonalGuard = () => {
  return (
    <div className={styles.personalGuard}>
      <PersonalGuardIcon className={styles.personalGuardIcon} />
      <h3>Личная охрана</h3>
      <p>с предоставлением телохранителей и/или водителей-телохранителей</p>
    </div>
  )
}

export default PersonalGuard

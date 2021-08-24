import React from 'react'
import styles from './styles.module.scss'

const Input = (props) => {
  return (
    <div className={styles.wrapper}>
      <input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
      />
      <div className={props.error ? styles.error : ''} />
      <p>{props.errorText}</p>
    </div>
  )
}

export default Input

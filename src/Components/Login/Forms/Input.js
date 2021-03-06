import React from 'react';
import styles from './Input.module.css'

const Input = ({ label, type, name, value, onChange, error, onBlur, min, max }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>{label}</label>
        <input
        name={name}
        id={name}
        type={type}
        value={value}
        className={styles.input}
        onChange={onChange}
        onBlur={onBlur}
        min={min}
        max={max}
        />
        { error && <p className={styles.error}>{error}</p> }
      </div>
  )
}

export default Input

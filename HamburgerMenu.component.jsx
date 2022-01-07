import React, { useState } from 'react'
import styles from './styles/HamburgerMenu.module.css'

const btn = 'cursor-pointer absolute transition duration-500'
const icon = 'transition duration-500 absolute'
const left = ''
const right = ''

const HamburgerMenu = () => {
  const [active, setActive] = useState(false)

  return (
    <button
      onClick={() => {
        setActive(!active)
      }}
      className={`${btn} ${styles.parent} ${active ? styles.active : ''}`}
    >
      <div className={`${icon} ${left}`}></div>
      <div className={`${icon} ${right}`}></div>
    </button>
  )
}

export default HamburgerMenu

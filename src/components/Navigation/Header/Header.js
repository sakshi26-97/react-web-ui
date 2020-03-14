import React from 'react'
import classes from './Header.css';

import Logo from '../../UI/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const header = (props) => {
  return (
    <div className={classes.Header}>
      <Logo />
      <NavigationItems />
    </div>
  )
}

export default header

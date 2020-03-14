import React from 'react'
import classes from './NavigationItem.css'

import { NavLink } from 'react-router-dom';

const navigationItem = props => {
  const navClasses = [classes.NavigationItem];
  if (props.class === 'Logout') {
    navClasses.push(classes.Logout)
  }

  return (
    <NavLink activeClassName={classes.active} className={navClasses.join(' ')} to={props.link}> {props.children}</NavLink >
  )
}

export default navigationItem

import React from 'react'
import classes from './Logo.css'
import logo from '../../../assets/images/acc.png'


const logo = props => {
  return (
    // <div className={classes.Logo}>
    <img className={classes.Logo} src={logo} alt="Logo"></img>
    // </div>
  )
}


export default logo
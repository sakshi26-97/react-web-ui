import React from 'react'
import classes from './Logo.css'
import accentureLogo from '../../../assets/images/accenture.png'


const logo = props => {
  return (
    // <div className={classes.Logo}>
    <img className={classes.Logo} src={accentureLogo} alt="Accenture Logo"></img>
    // </div>
  )
}


export default logo
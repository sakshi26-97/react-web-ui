import React from 'react'
import Aux from '../../../hoc/Aux/Aux'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {
  return (
    <Aux>
      <NavigationItem link='/provision-dataset'>Provision Data</NavigationItem>
      <NavigationItem link='/empty-dataset'>Create Data</NavigationItem>
      <NavigationItem link='/copy-dataset'>Copy Data</NavigationItem>
      <NavigationItem link='/logout' class='Logout'>Logout</NavigationItem>
    </Aux>
  )
}

export default navigationItems

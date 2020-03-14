import React from 'react'
// import { FaSearch } from 'react-icons/fa';
// import SearchIcon from '@material-ui/icons/Search';

const search = (props) => {
  let classesApplied = ['form-input']
  classesApplied.push(props.classes)
  return (
    //  <SearchIcon />
    <input type="search" className={classesApplied.join(' ')} name="search" autoComplete="off"
      placeholder={props.placeholder} />
  )
}

export default search

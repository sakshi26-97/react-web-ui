import React from 'react'

const button = (props) => {

  let appliedClass = ['btn btn-primary']
  if (props.classes) {
    appliedClass.push(props.classes)
  }

  return (
    <button
      className={appliedClass.join(' ')}
      disabled={props.disabled}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  )
}

export default button

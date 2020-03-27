import React from 'react'

const stepper = (props) => {

  let appliedClass = ['step-item']
  if (props.currentIndex === props.stepNumber) {
    appliedClass.push('active')
  }

  return (
    <li className={appliedClass.join(' ')}>
      <a href="provision-dataset" className="tooltip" data-tooltip={props.tooltip} >{props.children}</a>
    </li>
  )
}

export default stepper

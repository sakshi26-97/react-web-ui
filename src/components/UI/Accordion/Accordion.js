import React from 'react'

const accordion = (props) => {
  return (
    <details className="accordion" open>
      <summary className="accordion-header">
        <i className="icon icon-arrow-right mr-1"></i>
          Title
      </summary>
      <div className="accordion-body">
        {/* accordion-body */}
      </div>
    </details>
  )
}

export default accordion

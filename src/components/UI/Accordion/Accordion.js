import React from 'react'
import Search from '../Search/Search'

const accordion = (props) => {
  return (
    <details className="accordion" close>
      <summary className="accordion-header">
        <i className="icon icon-arrow-right mr-1"></i>
        <label className="form-checkbox" >
          <input type="checkbox" />
          <i className="form-icon"></i>{props.datasetName}
        </label>
        <Search placeholder='&#x26B2; Search Tables' />
      </summary>

      <div className="accordion-body" >
        {props.table.map((eachTable, index) => (
          <label className="form-checkbox" key={index}>
            <input type="checkbox" />
            <i className="form-icon"></i>{eachTable.tableName}
          </label>
        ))}
      </div>
    </details>
  )
}

export default accordion

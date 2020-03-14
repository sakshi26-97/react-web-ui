import React from 'react'
import classes from './Datasets.css'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'
import Search from '../../UI/Search/Search'

const datasets = (props) => {

  return (
    <div>

      <p className={classes.Project}>Project Name: {props.projectId}</p>

      <Search classes={classes.Search} placeholder='&#x26B2; Search Datasets' />

      <div className={classes.Container}>
        <table >
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Dataset Name</th>
            </tr>
          </thead>
          <tbody>
            {props.datasets.map((dataset, index) => {
              return (
                <tr key={index}>
                  <td>
                    <label className="form-checkbox">
                      <input type="checkbox" onClick={(event) => props.getCheckedItems(event, dataset)} />
                      <i className="form-icon"></i>{index + 1}
                    </label>
                  </td>
                  <td>{dataset}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <Button
        classes={classes.Button}
        clicked={props.increaseStepNumber}
        disabled={props.disabled}>Next</Button>
    </div>

  )
}

export default datasets

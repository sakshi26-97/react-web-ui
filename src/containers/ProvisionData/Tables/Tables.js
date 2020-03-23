import React, { Component } from 'react'
import Accordion from '../../../components/UI/Accordion/Accordion'
import classes from './Tables.css'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../../components/UI/Button/Button'

import { connect } from 'react-redux'
import * as provisionActionCreators from '../../../store/actions/index'

export class Tables extends Component {

  componentDidMount () {
    this.props.getTables(this.props.selectedDatasets)
  }

  render () {

    let table = <div className="loading loading-lg"></div>

    if (this.props.tables) {
      table = Object.keys(this.props.tables).map(table => {
        return <Accordion datasetName={table} table={this.props.tables[table]} key={table} />
      })
    }

    return (
      <Aux>
        <div className={classes.Accordion}>
          <label className="form-checkbox">
            <i className="form-icon"></i>Select All
          </label>

          {table}

        </div>

        <div className={classes.ButtonFlex}>
          <Button
            classes={classes.Button}
            clicked={this.props.decreaseStepNumber}>
            Back
        </Button>

          <Button
            classes={classes.Button}
          // clicked={this.props.increaseStepNumber}
          >
            Cancel
        </Button>

          <Button
            classes={classes.Button}
            clicked={this.props.increaseStepNumber}
            disabled={this.props.disabled}>
            Next
        </Button>
        </div>
      </Aux >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tables: state.provisonReducer.tables
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTables: (selectedDatasets) => dispatch(provisionActionCreators.getTables(selectedDatasets))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tables)


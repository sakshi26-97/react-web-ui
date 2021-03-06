import React, { Component } from 'react'
import Stepper from '../../components/UI/Stepper/Stepper'
import classes from './CopyDataset.css'
import SelectDataset from './SelectDataset/SelectDataset'
import NamingDataset from './NamingDataset/NamingDataset'

import { connect } from 'react-redux';
import * as copyActionCreators from '../../store/actions/index'

class CopyDataset extends Component {

  state = {
    stepNames: ['Select Datasets', 'Provide Name'],
    selectedDatasets: [],
  }


  /* initiliazes selectedDatasets=[] when back or cancel button is clicked */
  setSelectedDatasetToEmptyArray = () => {
    this.setState({
      selectedDatasets: [...[]]
    })
  }

  /* checks whether next button in step 1 should be disabled or not */
  isDisable = () => {
    return this.state.selectedDatasets.length > 0 ? false : true
  }


  /* get all the datasets selected in step 1 in state.selectedDatasets  */
  getDatasetCheckedItems = (event, dataset) => {
    let copiedState = {
      ...this.state,
      selectedDatasets: [...this.state.selectedDatasets]
    }

    if (event.target.checked) {
      this.setState({
        selectedDatasets: copiedState.selectedDatasets.concat(dataset)
      })
    }
    else {
      this.setState({
        selectedDatasets: copiedState.selectedDatasets.filter(selectedDataset => selectedDataset !== dataset)
      })

    }
  }

  /* render component based on step number */
  componentToBeRender = () => {
    switch (this.props.stepNumber) {
      case 1: return <SelectDataset
        increaseStepNumber={this.props.increaseStepper}
        getDatasetCheckedItems={this.getDatasetCheckedItems}
        disabled={this.isDisable()} />

      case 2: return <NamingDataset
        increaseStepNumber={this.props.increaseStepper}
        decreaseStepNumber={this.props.decreaseStepper}
        cancelStepNumber={this.props.cancelStepNumber}
        selectedDatasets={this.state.selectedDatasets}
        setSelectedDatasetToEmptyArray={this.setSelectedDatasetToEmptyArray}
      />

      default: return <SelectDataset increaseStepNumber={this.props.increaseStepper} />
    }
  }

  render () {
    return (
      <div>

        <ul className={['step', classes.Step].join(' ')}>
          {this.state.stepNames.map((name, index) => (
            <Stepper
              tooltip={name}
              key={index}
              currentIndex={index + 1}
              stepNumber={this.props.stepNumber}>
              {name}
            </Stepper>)
          )}
        </ul>

        {this.componentToBeRender()}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stepNumber: state.copyReducer.stepNumber
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseStepper: () => dispatch(copyActionCreators.increaseCopyStepper()),
    decreaseStepper: () => dispatch(copyActionCreators.decreaseCopyStepper()),
    cancelStepNumber: () => dispatch(copyActionCreators.cancelCopyStepper())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CopyDataset)


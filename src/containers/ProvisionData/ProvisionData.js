import React, { Component } from 'react'
import classes from './ProvisionData.css'
import Stepper from '../../components/UI/Stepper/Stepper'
import Datasets from './Datasets/Datasets'
import Tables from './Tables/Tables'
import Schemas from './Schemas/Schemas'
import Filter from './Filter/Filter'
import View from './View/View'
import Summary from './Summary/Summary'

import { connect } from 'react-redux';
import * as provisionActionCreators from '../../store/actions/index'

class ProvisionData extends Component {


  state = {
    stepNames: ['Select Datasets', 'Select Tables', 'Select Schemas', 'Filter', 'View', 'Summary']
  }


  componentToBeRender = () => {
    // if (this.props.datasets && this.props.projectId) {
    switch (this.props.stepNumber) {
      case 1: return <Datasets
        increaseStepNumber={this.props.increaseStepper} />

      case 2: return <Tables
        increaseStepNumber={this.props.increaseStepper}
        decreaseStepNumber={this.props.decreaseStepper} />

      case 3: return <Schemas
        increaseStepNumber={this.props.increaseStepper}
        decreaseStepNumber={this.decreaseStepper} />

      case 4: return <Filter
        increaseStepNumber={this.props.increaseStepper}
        decreaseStepNumber={this.decreaseStepper} />

      case 5: return <View
        increaseStepNumber={this.props.increaseStepper}
        decreaseStepNumber={this.decreaseStepper} />

      case 6: return <Summary decreaseStepNumber={this.decreaseStepper} />

      default: return <Datasets increaseStepNumber={this.props.increaseStepper} />
    }
    // }
    // else {
    //   return (<div className="loading loading-lg"></div>)
    // }
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
    stepNumber: state.provisonReducer.stepNumber,
    // loading: state.provisonReducer.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseStepper: () => dispatch(provisionActionCreators.increaseStepper()),
    decreaseStepper: () => dispatch(provisionActionCreators.decreaseStepper()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProvisionData)


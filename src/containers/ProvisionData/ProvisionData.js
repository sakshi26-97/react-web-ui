import React, { Component } from 'react'
import classes from './ProvisionData.css'
import Stepper from '../../components/UI/Stepper/Stepper'
import Datasets from '../../components/Provision/Datasets/Datasets'
import Tables from '../../components/Provision/Tables/Tables'
import Schemas from '../../components/Provision/Schemas/Schemas'
import Filter from '../../components/Provision/Filter/Filter'
import View from '../../components/Provision/View/View'
import Summary from '../../components/Provision/Summary/Summary'

import { connect } from 'react-redux';
import * as provisionActionCreators from '../../store/actions/index'

class ProvisionData extends Component {


  state = {
    stepNames: ['Select Datasets', 'Select Tables', 'Select Schemas', 'Filter', 'View', 'Summary'],
    items: []
  }



  componentDidMount () {
    this.props.getProject()
    // if (this.props.projectId) {
    // this.props.getDatasets()
    // }
  }

  isDisable = () => {
    console.log('====================================');
    console.log(this.state.items, this.state.items.length > 0 ? false : true);
    console.log('====================================');
    return this.state.items.length > 0 ? false : true
  }

  getCheckedItems = (event, dataset) => {
    let copiedState = {
      ...this.state,
      items: [...this.state.items]
    }

    if (event.target.checked) {
      // this.state.items.push(dataset)
      this.setState({
        items: copiedState.items.concat(dataset)
      })
    }
    else {
      // this.state.items.splice(this.state.items.indexOf(dataset), 1)
      this.setState({
        items: copiedState.items.filter(item => item != dataset)
      })

    }
  }

  componentToBeRender = () => {
    if (this.props.datasets && this.props.projectId) {
      switch (this.props.stepNumber) {
        case 1: return <Datasets
          increaseStepNumber={this.props.increaseStepper}
          projectId={this.props.projectId}
          datasets={this.props.datasets}
          loading={this.props.loading}
          getCheckedItems={this.getCheckedItems}
          disabled={this.isDisable()} />

        case 2: return <Tables
          increaseStepNumber={this.props.increaseStepper}
          decreaseStepNumber={this.decreaseStepper} />

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
    }
    else {
      return (<div className="loading loading-lg"></div>)
    }
  }

  render () {

    return (
      <div>
        <ul className={['step', classes.Step].join(' ')}>
          {this.state.stepNames.map((name, index) => <Stepper tooltip={name} key={index} currentIndex={index + 1} stepNumber={this.props.stepNumber}>{name}</Stepper>)}
        </ul>

        {this.componentToBeRender()}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    stepNumber: state.provisonReducer.stepNumber,
    projectId: state.provisonReducer.projectId,
    datasets: state.provisonReducer.datasets,
    loading: state.provisonReducer.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProject: () => dispatch(provisionActionCreators.getProject()),
    // getDatasets: () => dispatch(provisionActionCreators.getDatasets()),
    increaseStepper: () => dispatch(provisionActionCreators.increaseStepper()),
    decreaseStepper: () => dispatch(provisionActionCreators.decreaseStepper()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProvisionData)


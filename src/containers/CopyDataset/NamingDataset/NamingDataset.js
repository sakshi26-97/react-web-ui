import React, { Component } from 'react'
import classes from './NamingDataset.css'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../../components/UI/Button/Button'

import { connect } from 'react-redux';
// import * as copyActionCreators from '../../../store/actions/index'

class NamingDataset extends Component {

  state = {
    envList: ['DataMess', 'PreProd'],
    copyDataset: []
  }


  componentDidMount () {
    let copied = this.props.selectedDatasets.map(dataset => {
      return {
        'sourceDataset': dataset,
        'destinationDataset': '',
        'project': '',
        'selectedEnv': '',
        'air': ''
      }
    })

    this.setState({
      copyDataset: copied
    })
  }

  isCopyDisable = () => {

    let unfilledName = this.state.copyDataset.filter((eachDataset) => {
      if (eachDataset['project'] === '' || eachDataset['selectedEnv'] === '' || eachDataset['air'] === '')
        return eachDataset;
    })
    return unfilledName.length > 0
  }

  inputClick = (projectName, selectedEnv, id, index) => {
    let copy = [...this.state.copyDataset]

    let copiedAtIndex = {
      ...copy[index]
    }
    if (projectName !== null) {
      copiedAtIndex['project'] = projectName
    }
    if (selectedEnv !== null && selectedEnv !== 'Select') {
      copiedAtIndex['selectedEnv'] = selectedEnv;
    }

    if (selectedEnv === 'Select') {
      copiedAtIndex['selectedEnv'] = '';
    }

    if (id !== null) {
      copiedAtIndex['air'] = id
    }

    copy[index] = copiedAtIndex

    this.setState({
      copyDataset: copy
    })
  }

  render () {
    return (
      <Aux>
        <div className={classes.NamingDataset}>
          {this.props.selectedDatasets.map((dataset, index) => (
            < details className="accordion" open key={index}>
              <summary className="accordion-header">
                {dataset}
              </summary>

              <div className={["accordion-body", "form-group", classes.AccordionFlex].join(' ')} >
                <input className="form-input" type="text" placeholder="Select Project Label" onKeyUp={(event) => this.inputClick(event.target.value, null, null, index)} />

                <select className="form-select" onChange={(event) => this.inputClick(null, event.target.value, null, index)}>
                  <option>Select</option>
                  {this.state.envList.map((env, index) => (
                    <option key={index} value={env}>{env}</option>
                  ))}
                </select>

                <input className="form-input" type="text" placeholder="Select AIR ID" onKeyUp={(event) => this.inputClick(null, null, event.target.value, index)} />
              </div>
            </details >
          ))
          }
        </div>

        <div className={classes.ButtonFlex}>
          <Button
            classes={classes.Button}
            clicked={this.props.decreaseStepNumber}>
            Back
          </Button>

          <Button
            classes={classes.Button}
            clicked={this.props.cancelStepNumber}
          >
            Cancel
          </Button>

          <Button
            classes={classes.Button}
            clicked={this.props.increaseStepNumber}
            disabled={this.isCopyDisable()}>
            Next
          </Button>
        </div>
      </Aux>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    // datasets: state.copyReducer.datasets,
    // loading: state.copyReducer.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // getDatasets: () => dispatch(copyActionCreators.getCopyDatasets())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NamingDataset)

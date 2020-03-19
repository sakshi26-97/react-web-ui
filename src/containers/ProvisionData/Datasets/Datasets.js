import React, { Component } from 'react';
import classes from './Datasets.css'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../../components/UI/Button/Button'
import Search from '../../../components/UI/Search/Search'

import { connect } from 'react-redux';
import * as provisionActionCreators from '../../../store/actions/index'

class Datasets extends Component {
  state = {
    selectedDatasets: []
  }

  componentDidMount () {
    this.props.getProject()
  }

  isDisable = () => {
    return this.state.selectedDatasets.length > 0 ? false : true
  }

  getCheckedItems = (event, dataset) => {
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
        selectedDatasets: copiedState.selectedDatasets.filter(item => item !== dataset)
      })

    }
  }

  render () {
    let dataset = <div className="loading loading-lg"></div>
    if (this.props.datasets && this.props.projectId) {
      dataset = (
        <div>

          <p className={classes.Project}>Project Name: {this.props.projectId}</p>

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
                {this.props.datasets.map((dataset, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <label className="form-checkbox">
                          <input type="checkbox" onClick={(event) => this.getCheckedItems(event, dataset)} />
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
            clicked={this.props.increaseStepNumber}
            disabled={this.isDisable()}>Next</Button>
        </div>
      )
    }

    return (
      <Aux>
        {dataset}
      </Aux>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    projectId: state.provisonReducer.projectId,
    datasets: state.provisonReducer.datasets,
    loading: state.provisonReducer.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProject: () => dispatch(provisionActionCreators.getProject())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Datasets);


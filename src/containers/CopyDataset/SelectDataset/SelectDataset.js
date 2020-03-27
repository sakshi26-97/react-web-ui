import React, { Component } from 'react'
import classes from './SelectDataset.css'
import Button from '../../../components/UI/Button/Button'
import Search from '../../../components/UI/Search/Search'


import { connect } from 'react-redux';
import * as copyActionCreators from '../../../store/actions/index'

class SelectDataset extends Component {

  state = {
    filteredData: []
  }

  /* http call to get Datasets */
  componentDidMount () {
    this.props.getDatasets()
  }

  /* initially props.datasets is [] so by using nextProps state.filterData is set to nextProps.datasets when nextProps.datasets is not null or empty*/
  componentWillReceiveProps (nextProps) {
    if (nextProps.datasets) {
      this.setState({
        filteredData: [...nextProps.datasets]
      })
    }
  }

  /* search filter */
  handleSearchChange = (searchValue) => {
    const lowercasedValue = searchValue.toLowerCase()
    this.setState({
      filteredData: this.props.datasets.filter(filterData => filterData.toLowerCase().includes(lowercasedValue))
    })
  }

  render () {

    let dataset = <div className="loading loading-lg"></div>
    if (this.props.datasets) {
      dataset = (


        <div className={classes.Container}>
          <table >
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Dataset Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.filteredData.map((dataset, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <label className="form-checkbox">
                        <input type="checkbox" onClick={(event) => this.props.getDatasetCheckedItems(event, dataset)} />
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

      )
    }

    return (
      <div>
        <p className={classes.Project}>Project Name: U-Service</p>

        <Search classes={classes.Search} textValue={this.handleSearchChange} placeholder='&#x26B2; Search Datasets' />

        {dataset}

        <Button
          classes={classes.Button}
          clicked={this.props.increaseStepNumber}
          disabled={this.props.disabled}>
          Next
        </Button>
      </div>
    )

  }

}

const mapStateToProps = (state) => {
  return {
    datasets: state.copyReducer.datasets,
    loading: state.copyReducer.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDatasets: () => dispatch(copyActionCreators.getCopyDatasets())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SelectDataset)

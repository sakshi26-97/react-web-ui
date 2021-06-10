import React, { Component } from 'react'
import * as createActionCreators from '../../store/actions/index'
import { connect } from 'react-redux';
import Search from '../../components/UI/Search/Search'
import Aux from '../../hoc/Aux/Aux'

class CreateDataset extends Component {

  state = {
    filteredService: [],
    selectedServive: []
  }


  componentDidMount () {
    this.props.onProjectList()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.serviceList) {
      this.setState({
        filteredService: [...nextProps.serviceList]
      })
    }
  }

  handleSearchChange = (searchValue) => {
    const lowercasedValue = searchValue.toLowerCase()
    this.setState({
      filteredService: this.props.serviceList.filter(filterData => filterData.toLowerCase().includes(lowercasedValue))
    })
  }


  getSelectedProject = (event) => {
    let projectId = event.target.value
    if (projectId !== 'Select Project') {
      this.props.onServiceList(projectId)
    }
  }

  getSelectedService = (event, service) => {
    let copiedState = {
      ...this.state,
      selectedServive: [...this.state.selectedServive]
    }

    if (event.target.checked) {
      this.setState({
        selectedServive: copiedState.selectedServive.concat(service)
      })
    }
    else {
      this.setState({
        selectedServive: copiedState.selectedServive.filter(serv => serv !== service)
      })
    }
  }

  render () {

    let projectDropdown = null

    if (this.props.projectList) {
      projectDropdown = (
        this.props.projectList.map((project, index) => (
          <option key={index}>
            {project}
          </option>
        )))

    }

    let serviceDropdown = null

    if (this.props.serviceList) {
      serviceDropdown = (this.state.filteredService.map((service, index) => (
        <label className="form-checkbox" key={index}>
          <input type="checkbox" onClick={(event) => this.getSelectedService(event, service)} />
          <i className="form-icon"></i>{service}
        </label>
      )))
    }

    return (
      <Aux>
        <div className="form-group">
          <select className="form-select" onClick={this.getSelectedProject}>
            <option>Select Project</option>
            {projectDropdown}
          </select>
        </div>

        <details className="accordion" close>
          <summary className="accordion-header">
            <i className="icon icon-arrow-right mr-1"></i>Select Service
            <Search placeholder='&#x26B2; Select Service' textValue={this.handleSearchChange} />
          </summary>

          <div className="accordion-body" >
            {serviceDropdown}
          </div>
        </details>

      </Aux>


    )
  }
}

const mapStateToProps = state => {
  return {
    projectList: state.createReducer.projectList,
    serviceList: state.createReducer.serviceList
  }
}



const mapDispatchToProps = dispatch => {
  return {
    onProjectList: () => dispatch(createActionCreators.getProjectList()),
    onServiceList: (projectId) => dispatch(createActionCreators.getServiceList(projectId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateDataset)

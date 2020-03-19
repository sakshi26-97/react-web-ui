import React, { Component } from 'react'
import Accordion from '../../../components/UI/Accordion/Accordion'

import { connect } from 'react-redux'
import * as provisionActionCreators from '../../../store/actions/index'

export class Tables extends Component {

  componentDidMount () {
    this.props.getTables()
  }

  render () {
    return (
      <Accordion />
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


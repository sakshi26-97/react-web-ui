import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../utility/utility'

const initialState = {
  projectId: null,
  datasets: null,
  tables: null,
  schemas: null,
  loading: false,
  error: null,
  stepNumber: 1
}

const increaseStepper = (state, action) => {
  if (state.stepNumber < 6) {
    return updateObject(state, { stepNumber: state.stepNumber + 1 })
  }
  return state
}

const decreaseStepper = (state, action) => {
  if (state.stepNumber > 1) {
    return updateObject(state, { stepNumber: state.stepNumber - 1 })
  }
  return state
}

const getProjectInit = (state, action) => {
  return updateObject(state, { loading: true })
}

const getProjectSuccess = (state, action) => {
  return updateObject(state, { projectId: action.projectId, loading: false })
}

const getProjectFailed = (state, action) => {
  return updateObject(state, { error: action.error, loading: false })
}

const getDatasetInit = (state, action) => {
  return updateObject(state, { loading: true })
}

const getDatasetSuccess = (state, action) => {
  return updateObject(state, { datasets: action.datasets, loading: false })
}

const getDatasetFailed = (state, action) => {
  return updateObject(state, { error: action.error, loading: false })
}

const getTableInit = (state, action) => {
  return updateObject(state, { loading: true })
}

const getTableSuccess = (state, action) => {
  return updateObject(state, { tables: action.tables, loading: false })
}

const getTableFailed = (state, action) => {
  return updateObject(state, { error: action.error, loading: false })
}

const getSchemaInit = (state, action) => {
  return updateObject(state, { loading: true })
}

const getSchemaSuccess = (state, action) => {
  return updateObject(state, { schemas: action.schemas, loading: false })
}

const getSchemaFailed = (state, action) => {
  return updateObject(state, { error: action.error, loading: false })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.INCREASE_STEPPER:
      return increaseStepper(state, action)
    // return {
    //   ...state,
    //   stepNumber: action.step + 1
    // }

    case actionTypes.DECREASE_STEPPER: return decreaseStepper(state, action)

    case actionTypes.GET_PROJECT_INIT: return getProjectInit(state, action)

    case actionTypes.GET_PROJECT_SUCCESS: return getProjectSuccess(state, action)

    case actionTypes.GET_PROJECT_FAILED: return getProjectFailed(state, action)

    case actionTypes.GET_DATASET_INIT: return getDatasetInit(state, action)

    case actionTypes.GET_DATASET_SUCCESS: return getDatasetSuccess(state, action)

    case actionTypes.GET_DATASET_FAILED: return getDatasetFailed(state, action)

    case actionTypes.GET_TABLE_INIT: return getTableInit(state, action)

    case actionTypes.GET_TABLE_SUCCESS: return getTableSuccess(state, action)

    case actionTypes.GET_TABLE_FAILED: return getTableFailed(state, action)

    case actionTypes.GET_SCHEMA_INIT: return getSchemaInit(state, action)

    case actionTypes.GET_SCHEMA_SUCCESS: return getSchemaSuccess(state, action)

    case actionTypes.GET_SCHEMA_FAILED: return getSchemaFailed(state, action)

    default: return state
  }
}

export default reducer
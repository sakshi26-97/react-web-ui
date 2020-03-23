import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../utility/utility'

const initialState = {
  datasets: null,
  loading: false,
  error: null,
  stepNumber: 1
}

const increaseStepper = (state, action) => {
  if (state.stepNumber < 2) {
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

const cancelStepper = (state, action) => {
  return updateObject(state, { stepNumber: 1 })
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


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.COPY_INCREASE_STEPPER: return increaseStepper(state, action)

    case actionTypes.COPY_DECREASE_STEPPER: return decreaseStepper(state, action)

    case actionTypes.COPY_CANCEL_STEPPER: return cancelStepper(state, action)

    case actionTypes.GET_COPY_DATASET_INIT: return getDatasetInit(state, action)

    case actionTypes.GET_COPY_DATASET_SUCCESS: return getDatasetSuccess(state, action)

    case actionTypes.GET_COPY_DATASET_FAILED: return getDatasetFailed(state, action)

    default: return state
  }
}

export default reducer
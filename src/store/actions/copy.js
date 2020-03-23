import * as actionTypes from './actionTypes'
import axios from '../../axios'

/* STEPPER */
export const increaseCopyStepper = () => {
  return {
    type: actionTypes.COPY_INCREASE_STEPPER
  }
}

export const decreaseCopyStepper = () => {
  return {
    type: actionTypes.COPY_DECREASE_STEPPER
  }
}

export const cancelCopyStepper = () => {
  return {
    type: actionTypes.COPY_CANCEL_STEPPER
  }
}


/* DATASETS */
export const getCopyDatasets = () => {
  return async (dispatch) => {
    dispatch(getDatasetInit())
    const response = await axios.get('/getDatasets/accenture-web-admin')
    if (response.data.success) {
      let datasets = response.data.data.datasets.map(dataset => dataset.datasetReference.datasetId)
      return dispatch(getDatasetSuccess(datasets))
    }
    return dispatch(getDatasetFailed(response.data.message))
  }

}

const getDatasetInit = () => {
  return {
    type: actionTypes.GET_COPY_DATASET_INIT
  }
}

const getDatasetSuccess = (datasets) => {
  return {
    type: actionTypes.GET_COPY_DATASET_SUCCESS,
    datasets: datasets
  }
}

const getDatasetFailed = (errorMessage) => {
  return {
    type: actionTypes.GET_COPY_DATASET_FAILED,
    error: errorMessage
  }
}



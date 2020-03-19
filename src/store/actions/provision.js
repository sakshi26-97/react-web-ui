import * as actionTypes from './actionTypes'
import axios from '../../axios'

/* STEPPER */
export const increaseStepper = (step) => {
  return {
    type: actionTypes.INCREASE_STEPPER
  }
}

export const decreaseStepper = () => {
  return {
    type: actionTypes.DECREASE_STEPPER
  }
}

/* PROJECT */
export const getProject = () => {
  return async dispatch => {
    dispatch(getProjectInit())
    const response = await axios.get('/projects')
    if (response.data.success) {
      dispatch(getDatasets(response.data.data.projectId))
      return dispatch(getProjectSuccess(response.data.data.projectId))
    }
    return dispatch(getProjectFailed(response.data.message))
  }

}

const getProjectInit = () => {
  return {
    type: actionTypes.GET_PROJECT_INIT
  }
}

const getProjectSuccess = (projectId) => {
  return {
    type: actionTypes.GET_PROJECT_SUCCESS,
    projectId: projectId
  }
}

const getProjectFailed = (errorMessage) => {
  return {
    type: actionTypes.GET_PROJECT_FAILED,
    error: errorMessage
  }
}


/* DATASETS */
export const getDatasets = (projectId) => {
  return async (dispatch, getState) => {
    dispatch(getDatasetInit())
    // const projectId = getState().provisonReducer.projectId
    // const response = await axios.get('/getDatasets/accenture-web-admin')
    const response = await axios.get('/getDatasets/' + projectId)
    if (response.data.success) {
      let datasets = response.data.data.datasets.map(dataset => dataset.datasetReference.datasetId)
      return dispatch(getDatasetSuccess(datasets))
    }
    return dispatch(getDatasetFailed(response.data.message))
  }

}

const getDatasetInit = () => {
  return {
    type: actionTypes.GET_DATASET_INIT
  }
}

const getDatasetSuccess = (datasets) => {
  return {
    type: actionTypes.GET_DATASET_SUCCESS,
    datasets: datasets
  }
}

const getDatasetFailed = (errorMessage) => {
  return {
    type: actionTypes.GET_DATASET_FAILED,
    error: errorMessage
  }
}


/* TABLES */
export const getTables = (selectedDataset) => {
  console.log('====================================');
  console.log(selectedDataset);
  console.log('====================================');
  return async dispatch => {
    dispatch(getTableInit())
    const response = await axios.post('/tables', {
      "TableRequest": {
        "datasets": selectedDataset
      }
    })
    if (response.data.success) {
      return dispatch(getTableSuccess(response.data.data.tables))
    }
    return dispatch(getTableFailed(response.data.message))
  }

}

const getTableInit = () => {
  return {
    type: actionTypes.GET_TABLE_INIT
  }
}

const getTableSuccess = (tables) => {

  let data = Object.keys(tables).map(table => {
    return {
      [table]: tables[table].map(tableName => tableName.tableName)
    }
  })
  return {
    type: actionTypes.GET_TABLE_SUCCESS,
    tables: data
  }
}

const getTableFailed = (errorMessage) => {
  return {
    type: actionTypes.GET_TABLE_FAILED,
    error: errorMessage
  }
}

/* SCHEMAS */
// export const getSchema = () => {
//   return async dispatch => {
//     dispatch(getSchemaInit())
//     const response = await axios.get('/Schemas')
//     if (response.data.success) {
//       dispatch(getDatasets(response.data.data.SchemaId))
//       return dispatch(getSchemaSuccess(response.data.data.SchemaId))
//     }
//     return dispatch(getSchemaFailed(response.data.message))
//   }

// }

// const getSchemaInit = () => {
//   return {
//     type: actionTypes.GET_SCHEMA_INIT
//   }
// }

// const getSchemaSuccess = (SchemaId) => {
//   return {
//     type: actionTypes.GET_SCHEMA_SUCCESS,
//     SchemaId: SchemaId
//   }
// }

// const getSchemaFailed = (errorMessage) => {
//   return {
//     type: actionTypes.GET_SCHEMA_FAILED,
//     error: errorMessage
//   }
// }
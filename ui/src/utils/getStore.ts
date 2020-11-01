import createSagaMiddlewares from 'redux-saga'
import reducers from '../reducers/index'
import redux, {createStore, applyMiddleware} from 'redux'
import * as sagas from '../sagas'
import { stateSchema } from '../index'

const getStore = (initialState: stateSchema): redux.Store => {
  const sagaMiddleware = createSagaMiddlewares()
  const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware))

  for(const saga of Object.values(sagas)){
    sagaMiddleware.run(saga)
  }

  return store
}

export default getStore
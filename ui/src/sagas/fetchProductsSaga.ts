
import { take, call, put, all } from 'redux-saga/effects'
import { GET_PRODUCTS, SET_PRODUCTS, RESET_PRODUCTS, FETCHING, FETCHED } from '../actions'
import { getClient } from '../utils/httpClient'

export function* fetchProducts(){
  yield take(GET_PRODUCTS)
  yield put({type: FETCHING})
  
  const res = yield call(getClient(), '/api/v1/products')

  if(res.status !== 200){
    return yield put({type: RESET_PRODUCTS})
  }

  yield all([
    put({type: SET_PRODUCTS, payload: res.data.data}),
    put({type: FETCHED})
  ])
}
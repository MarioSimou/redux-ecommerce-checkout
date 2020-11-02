import { take, put, call, all } from 'redux-saga/effects'
import {getClient} from '../utils/httpClient'
import { GET_USER, FETCHING, SET_USER, RESET_USER, FETCHED } from '../actions'

export function* fetchUserSaga(){
  const {payload: userId}: any = yield take(GET_USER)
  yield put({type: FETCHING})

  const {data,  status}: any = yield call(getClient().get, `/api/v1/users/${userId}`) 

  if(status !== 200){
    return yield put({type: RESET_USER})
  }
  
  yield all([
    put({type: SET_USER, payload: data.data}),
    put({type: FETCHED})
  ])
}


import { takeEvery, call, put } from "redux-saga/effects"
import { GET_CATEGORIES, 
  SET_CATEGORIES } 
  from '../actions'
import Axios from 'axios'

export const wGetCategories = function* () {
  yield takeEvery(GET_CATEGORIES, yGetCategories)
}

function* yGetCategories() {
  console.log('getting categories')
  try {
    const url = 'http://localhost:3000/categories'
    const result = yield call(Axios.get, url)
    yield put({ type: SET_CATEGORIES, value: result.data })
  }
  catch (error) {
    console.log('Failed getting categories', error)
  }
}
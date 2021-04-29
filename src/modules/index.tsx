import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import posts from './posts';
import { fetchSaga } from './saga';

const rootReducer = combineReducers({
  posts,
});

export function* rootSaga() {
  yield all([fetchSaga()]);
}
export default rootReducer;

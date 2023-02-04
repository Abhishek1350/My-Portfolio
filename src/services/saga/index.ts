import { all } from 'redux-saga/effects';
import personalDetailsSaga from './personalDetails';

export function* rootSaga() {
    yield all([
        personalDetailsSaga()
    ]);
}

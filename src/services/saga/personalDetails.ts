import { call, put, takeEvery } from 'redux-saga/effects';
import { apiClient } from '../api';
import { fetchDetails, fetchDetailsSuccess, fetchDetailsError } from '../reducers/personalDetails';

function* fetchPersonalDetailsSaga(): any {
    try {
        // const response = yield call(apiClient.fetch, '*[_type == "post"]');
        console.log(apiClient)
        const response = [
            {
                name: 'John',
                age: 30
            },
        ]
        yield put(fetchDetailsSuccess(response));
    } catch (error) {
        yield put(fetchDetailsError(error));
    }
}

export default function* personalDetailsSaga() {
    yield takeEvery(fetchDetails.type, fetchPersonalDetailsSaga);
}

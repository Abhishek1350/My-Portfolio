import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from '../api';
import { GET_PERSONAL_DETAILS, GET_PERSONAL_DETAILS_SUCCESS, GET_PERSONAL_DETAILS_FAILURE, } from '../actions/personalDetails';

function* fetchPersonalDetailsSaga(action: any): any {
    try {
        const response = yield call(api.getPersonalDetails, action.payload) as any;
        yield put({ type: GET_PERSONAL_DETAILS_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: GET_PERSONAL_DETAILS_FAILURE, payload: error });
    }
}

export default function* personalDetailsSaga() {
    yield takeEvery(GET_PERSONAL_DETAILS, fetchPersonalDetailsSaga);
}

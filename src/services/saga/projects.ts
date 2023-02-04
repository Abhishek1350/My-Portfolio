import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from '../api';
import { GET_PROJECTS, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE } from "../actions/projects";

function* fetchProjectsSaga(action: any): any {
    try {
        const response = yield call(api.getProjects, action.payload) as any;
        yield put({ type: GET_PROJECTS_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: GET_PROJECTS_FAILURE, payload: error });
    }
}

export default function* projectsSaga() {
    yield takeEvery(GET_PROJECTS, fetchProjectsSaga);
}
import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from '../api';
import {
    GET_BLOGS,
    GET_BLOGS_SUCCESS,
    GET_BLOGS_FAILURE,
    GET_BLOG,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAILURE
} from "../actions/blogs";

function* fetchAllBlogs(action: any): any {
    try {
        const response = yield call(api.getBlogs, action.payload) as any;
        yield put({ type: GET_BLOGS_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: GET_BLOGS_FAILURE, payload: error });
    }
}

function* fetchBlog(action: any): any {
    try {
        const response = yield call(api.getBlogs, action.payload) as any;
        yield put({ type: GET_BLOG_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: GET_BLOG_FAILURE, payload: error });
    }
}

export default function* blogsSaga() {
    yield takeEvery(GET_BLOGS, fetchAllBlogs);
    yield takeEvery(GET_BLOG, fetchBlog);
}
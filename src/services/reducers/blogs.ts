import {
    GET_BLOGS,
    GET_BLOGS_SUCCESS,
    GET_BLOGS_FAILURE,
    GET_BLOG,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAILURE
} from "../actions/blogs";

export const blogs = (data = {
    data: [],
    loading: false,
    error: null
}, action: any) => {
    switch (action.type) {
        case GET_BLOGS:
            return {
                ...data,
                loading: true,
                error: null,
            };

        case GET_BLOGS_SUCCESS:
            return {
                ...data,
                loading: false,
                data: action.payload
            };

        case GET_BLOGS_FAILURE:
            return {
                ...data,
                loading: false,
                error: action.payload,
                data: []
            };

        default:
            return data
    }
}
export const blog = (data = {
    data: [],
    loading: false,
    error: null
}, action: any) => {
    switch (action.type) {
        case GET_BLOG:
            return {
                ...data,
                loading: true,
                error: null,
            };

        case GET_BLOG_SUCCESS:
            return {
                ...data,
                loading: false,
                data: action.payload
            };

        case GET_BLOG_FAILURE:
            return {
                ...data,
                loading: false,
                error: action.payload,
                data: []
            };

        default:
            return data
    }
}



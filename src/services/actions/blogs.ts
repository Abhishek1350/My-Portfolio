export const GET_BLOGS = 'GET_BLOGS';
export const GET_BLOGS_SUCCESS = 'GET_BLOGS_SUCCESS';
export const GET_BLOGS_FAILURE = 'GET_BLOGS_FAILURE';
export const GET_BLOG = 'GET_BLOG';
export const GET_BLOG_SUCCESS = 'GET_BLOG_SUCCESS';
export const GET_BLOG_FAILURE = 'GET_BLOG_FAILURE';

export const getBlogs = (query: string) => {
    return {
        type: GET_BLOGS,
        payload: query
    }
}

export const getBlog = (query: string) => {
    return {
        type: GET_BLOG,
        payload: query
    }
}
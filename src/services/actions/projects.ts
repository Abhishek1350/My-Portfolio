export const GET_PROJECTS = 'GET_PROJECTS';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';

export const getProjects = (query: string) => {
    return {
        type: GET_PROJECTS,
        payload: query
    }
}
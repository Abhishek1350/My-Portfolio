import { GET_PROJECTS, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE } from "../actions/projects";

const initialState = {
    data: [],
    loading: false,
    error: null
};

const projects = (data = initialState, action: any) => {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...data,
                loading: true,
                error: null,
            };

        case GET_PROJECTS_SUCCESS:
            return {
                ...data,
                loading: false,
                data: action.payload
            };

        case GET_PROJECTS_FAILURE:
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

export default projects;

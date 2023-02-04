import { GET_PERSONAL_DETAILS, GET_PERSONAL_DETAILS_SUCCESS, GET_PERSONAL_DETAILS_FAILURE } from '../actions/personalDetails';

const initialState = {
    data: [],
    loading: false,
    error: null
};

const personalDetails = (data = initialState, action: any) => {
    switch (action.type) {
        case GET_PERSONAL_DETAILS:
            return {
                ...data,
                loading: true,
                error: null,
            };

        case GET_PERSONAL_DETAILS_SUCCESS:
            return {
                ...data,
                loading: false,
                data: action.payload
            };

        case GET_PERSONAL_DETAILS_FAILURE:
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

export default personalDetails;
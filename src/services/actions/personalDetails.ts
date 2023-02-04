export const GET_PERSONAL_DETAILS = 'GET_PERSONAL_DETAILS';
export const GET_PERSONAL_DETAILS_SUCCESS = 'GET_PERSONAL_DETAILS_SUCCESS';
export const GET_PERSONAL_DETAILS_FAILURE = 'GET_PERSONAL_DETAILS_FAILURE';

export const getPersonalDetails = (query: string) => {
    return {
        type: GET_PERSONAL_DETAILS,
        payload: query
    }
}
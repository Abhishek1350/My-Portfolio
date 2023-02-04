import { apiClient } from '../../sanity';

export const api = {
    getPersonalDetails: async (query: string) => {
        const response = await apiClient.fetch(query);
        return response;
    },

    getProjects: async (query: string) => {
        const response = await apiClient.fetch(query);
        return response;
    },

    getBlogs: async (query: string) => {
        const response = await apiClient.fetch(query);
        return response;
    },

    getBlog: async (query: string) => {
        const response = await apiClient.fetch(query);
        return response;
    },
}
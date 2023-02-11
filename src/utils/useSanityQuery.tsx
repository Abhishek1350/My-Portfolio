// for fetching data from Sanity
import { useState, useEffect } from 'react';
import { apiClient } from './sanityClient';


const useSanityQuery = (query: string, params?: any) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiClient.fetch(query, params).then(setData).catch(setError).finally(() => setLoading(false));
    }, [query, params]);

    return { data, error, loading };
}

export default useSanityQuery;
import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios';
export const NewsContext = createContext();
export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    useEffect(() => {
       axios
       .get(
           `http://hn.algolia.com/api/v1/search_by_date?query=...`
        )
        .then((response) => setData(response.data.hits))
        .catch((error) => console.log(error));
    }, [])
    return (
        <NewsContext.Provider value={{ data }}>
            {props.children}
        </NewsContext.Provider>
    )
};
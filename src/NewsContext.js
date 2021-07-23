import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios';
export const NewsContext = createContext();
export const NewsContextProvider = (props) => {
    const [data, setData] = useState();

    useEffect(() => {
       axios
       .get(
            `https://hn.algolia.com/api/v1/search?tags=story`
        )
        .then((response) => {
            setData(response.data.hits);
        })
        .catch((error) => console.log(error));
    }, [])

    return (
        <>
        <NewsContext.Provider value={{ data }}>
            {props.children}
        </NewsContext.Provider>
      </>
    )
};
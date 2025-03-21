import {createContext, useEffect, useState} from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch.js';

const DataContext = createContext({});

export const DataProvider = ({children}) => {
  const [posts, setPosts] = useState([]);
  const {data, loading} = useAxiosFetch(
      'https://jsonplaceholder.typicode.com/posts');

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
      <DataContext.Provider value={{posts, setPosts, loading}}>
        {children}
      </DataContext.Provider>
  );
};

export default DataContext;
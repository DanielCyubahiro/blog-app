import {useEffect, useState} from 'react';
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    void (async (url) => {
      setLoading(true);
      try {
        const response = await axios.get(url, {cancelToken: source.token});
        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        if (isMounted) {
          console.error(error);
          setData([]);
        }
      } finally {
        isMounted && setLoading(false);
      }
    })(dataUrl);

    //Cleanup function
    return () => {
      isMounted = false;
      source.cancel();
    };
  }, [dataUrl]);
  return {data, loading};
};

export default useAxiosFetch;
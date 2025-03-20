import {useEffect, useState} from 'react';
import axios from 'axios';
import Post from '../components/Post.jsx';
import {Empty, Spin} from 'antd';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    void (async () => {
      try {
        setLoading(true);
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
      <main>
        {!loading
            ? posts.length
                ? (
                    posts.map((post) => (
                        <Post key={post.id} post={post}/>
                    ))
                )
                : <Empty
                    description={'No Posts to display'}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                />
            : <Spin
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
                size="large"
            />
        }
      </main>
  );
};

export default HomePage;
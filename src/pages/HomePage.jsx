import Post from '../components/Post.jsx';
import {Empty, Spin} from 'antd';
import {useContext} from 'react';
import DataContext from '../context/DataContext.jsx';

const HomePage = () => {
  const {posts, loading} = useContext(DataContext);

  return (
      <main>
        {!loading
            ? posts.length
                ? (
                    posts.map((post) => (
                        <Post key={post.id} post={post}/>
                    )).toReversed()
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
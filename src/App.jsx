import HomePage from './pages/HomePage.jsx';
import PostPage from './pages/PostPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import {Route, Routes} from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    void (async () => {
      try {
        setLoading(true);
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage loading={loading} posts={posts}/>}/>
            <Route path="new-post"
                   element={<PostPage posts={posts} setPosts={setPosts}/>}/>
            <Route path="posts/:id"
                   element={<PostPage posts={posts} setPosts={setPosts}/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;

import HomePage from './pages/HomePage.jsx';
import CreatePostPage from './pages/CreatePostPage.jsx';
import PostPage from './pages/PostPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import {Route, Routes} from 'react-router-dom';
import Layout from './layouts/Layout.jsx';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="new-post" element={<CreatePostPage/>}/>
            <Route path="post/:id" element={<PostPage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;

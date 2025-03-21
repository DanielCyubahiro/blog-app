import HomePage from './pages/HomePage.jsx';
import PostPage from './pages/PostPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import {Route, Routes} from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import {DataProvider} from './context/DataContext.jsx';

function App() {

  return (
      <div className="App">
        <DataProvider>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<HomePage/>}/>
              <Route path="new-post" element={<PostPage/>}/>
              <Route path="posts/:id" element={<PostPage/>}/>
              <Route path="about" element={<AboutPage/>}/>
              <Route path="*" element={<NotFoundPage/>}/>
            </Route>
          </Routes>
        </DataProvider>
      </div>
  );
}

export default App;

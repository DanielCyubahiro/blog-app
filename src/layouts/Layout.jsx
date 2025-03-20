import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import {Outlet} from 'react-router-dom';

const Layout = ({posts, setPosts}) => {
  return (
      <>
        <Header/>
        <Navbar posts={posts} setPosts={setPosts}/>
        <Outlet/>
        <Footer/>
      </>
  );
};

export default Layout;
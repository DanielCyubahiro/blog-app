import {Input} from 'antd';
import {Link} from 'react-router-dom';

const {Search} = Input;

const Navbar = () => {
  return (
      <nav>
        <Search
            placeholder="Search Posts"
            allowClear
            // onSearch={onSearch}
            style={{
              width: '90%',
              paddingTop: '10px',
              paddingLeft: '15px',
            }}
            size="large"
        />
        <ul>
          <li>
            <Link
                to="/"
                style={{color: 'whitesmoke', textDecoration: 'none'}}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
                to="/new-post"
                style={{color: 'whitesmoke', textDecoration: 'none'}}
            >
              Post
            </Link>
          </li>
          <li>
            <Link
                to="/about"
                style={{color: 'whitesmoke', textDecoration: 'none'}}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
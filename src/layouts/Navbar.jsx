import {Input} from 'antd';

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
            size='large'
        />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Posts</li>
        </ul>
      </nav>
  );
};

export default Navbar;
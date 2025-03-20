import {EllipsisOutlined} from '@ant-design/icons';
import {Avatar, Card} from 'antd';
import {useNavigate} from 'react-router-dom';

const Post = ({post}) => {
  const {Meta} = Card;
  const navigate = useNavigate();
  return (
      <Card
          style={{
            width: 300,
            margin: 10,
          }}
          actions={[
            <EllipsisOutlined
                key="ellipsis"
                onClick={() => navigate('/posts/' + post.id)}/>,
          ]}
      >
        <Meta
            avatar={
              <Avatar
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
              />
            }
            title={post.title}
            description={
              post.body.length < 25 ? post.body : post.body.slice(0, 70) + '...'
            }
        />
      </Card>
  );
};

export default Post;
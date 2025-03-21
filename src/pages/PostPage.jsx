import {Button, Form, Input} from 'antd';
import {useNavigate, useParams} from 'react-router-dom';
import {useContext, useEffect} from 'react';
import DataContext from '../context/DataContext.jsx';

const PostPage = () => {
  const {posts, setPosts} = useContext(DataContext);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const {id} = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  useEffect(() => {
    if (post) {
      form.setFieldsValue({
        title: post.title,
        body: post.body,
      });
    }
  }, [post, form]);

  const handleSubmit = async (formData) => {
    try {
      if (!id) {
        //Create new post
        const newId = posts.length + 1;
        const newPost = {id: newId, body: formData.body, title: formData.title};
        setPosts([...posts, newPost]);
        navigate('/');
      } else {
        //Edit post
        setPosts(posts.map(post => {
                  return post.id === parseInt(id)
                      ? {
                        ...post,
                        title: formData.title,
                        body: formData.body,
                      }
                      : post;
                },
            ),
        );
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      setPosts(posts.filter(post => post.id !== parseInt(id)));
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <main>
        <Form
            form={form}
            name="basic"
            style={{
              width: '80%',
              marginTop: '5%',
            }}
            onFinish={handleSubmit}
        >
          <Form.Item
              label="Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Please input the title!',
                },
              ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
              name="body"
              label="Body"
              rules={[
                {
                  required: true,
                },
              ]}
          >
            <Input.TextArea rows={6}/>
          </Form.Item>
          <Form.Item label={null}>
            <Button
                type="primary"
                htmlType="submit"
                style={{
                  background: '#333',
                  marginRight: 10,
                }}
            >
              Submit
            </Button>
            <Button
                onClick={() => handleDelete(post.id)}
                style={{
                  background: 'darkred',
                  marginRight: 10,
                  color: 'white',
                }}
            >
              Delete
            </Button>
          </Form.Item>
        </Form>
      </main>
  );
};

export default PostPage;
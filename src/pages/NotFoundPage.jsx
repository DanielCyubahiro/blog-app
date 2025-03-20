import {Result} from 'antd';
import {useNavigate} from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
      <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
      />
  );
};

export default NotFoundPage;
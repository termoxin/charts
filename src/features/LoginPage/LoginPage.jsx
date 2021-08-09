import React from 'react';
import { Form, Input, Button } from 'antd';
import './LoginPage.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  setLoggedUser,
} from '../../app/userSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values) => {
    const { username, password } = values;
    if (username === 'adm' && password === 'vik') {
      dispatch(setLoggedUser({ userName: username }));
      history.push('/main');
    }
  };

  const onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="form-wrapper">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Логин"
          name="username"
          rules={[
            {
              required: true,
              message: 'Введите пароль!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Введите логин!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>

  );
};

export default LoginPage;

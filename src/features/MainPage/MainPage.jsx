import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Menu } from 'antd';
import { Redirect } from 'react-router-dom';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { fetchStocskData, selectData } from '../../app/stocksSlice';
import { isUserLoggedIn } from '../../app/userSlice';
import './MainPage.css';
import ChartContainer from '../Charts/ChartContainer/ChartContainer';

const { Sider, Content } = Layout;

const MainPage = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [stockType, setStockType] = useState('share');

  const isLoggedIn = useSelector(isUserLoggedIn);
  const response = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchStocskData());
  }, []);

  return (
    isLoggedIn && response
      ? (
        <Layout className="main-layout">
          <Sider trigger={null}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />} onClick={() => setStockType('share')}>
                Акции
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={() => setStockType('bond')}>
                Валюты
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />} onClick={() => setStockType('metal')}>
                Металлы
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <ChartContainer chartsData={response.filter((el) => el.type === stockType)} />
            </Content>
          </Layout>
        </Layout>
      )
      : <Redirect to="/" />
  );
};

export default MainPage;

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  ToolOutlined,
  OneToOneOutlined,
  PauseOutlined
} from '@ant-design/icons';
import Reports from './pages/reports';
import { Button, Layout, Menu } from 'antd';
import Dashboard from './pages/dashboard';
import FundTools from './pages/fundTools';
import Resources from './pages/resources';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <BrowserRouter>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          {/* <div className="logo" ><h3>POC</h3></div> */}
          <div className="logo">
            <PauseOutlined style={{ color: "green", fontSize: "30px" }} />
            <PauseOutlined style={{ color: "green", fontSize: "30px", marginLeft: '-18px' }} />
            {/* <img src="/download.png"  /> */}
            {/* <span className='logoTitle'>
              TEST
            </span> */}
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <PieChartOutlined />
              <span>Dashboard</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              <DesktopOutlined />
              <span>Reports</span>
              <Link to="/reports" />
            </Menu.Item>
            <Menu.Item key="3">
              <ToolOutlined />
              <span>Fund Tools</span>
              <Link to="/fund-tools" />
            </Menu.Item>
            <Menu.Item key="4">
              <OneToOneOutlined />
              <span>Resources</span>
              <Link to="/resources" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            <Button type="primary" style={{ float: "right", margin: "12px" }} icon={<UserOutlined />} size='large'>
              Login
            </Button>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 700 }}>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/fund-tools" element={<FundTools />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

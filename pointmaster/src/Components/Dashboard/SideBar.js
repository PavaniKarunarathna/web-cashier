import React, { useState, useEffect } from "react";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  SettingOutlined, 
  HistoryOutlined,
  AppstoreAddOutlined,
  PieChartOutlined,
  DollarOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";

const { Sider } = Layout;

const items = [
  {
    key: "/",
    icon: < HomeOutlined/>,
    label: "Home",
  },
  {
    key: "/customers",
    icon: <UsergroupAddOutlined />,
    label: "Customers",
  },
  {
    key: "/user",
    icon: < UserOutlined/>,
    label: "User",
  },
  {
    key: "/logs",
    icon: <HistoryOutlined />,
    label: "Logs",
  },
  {
    key: "/salessummary",
    icon: < PieChartOutlined/>,
    label: "Sales Summary",
  },
  {
    key: "/cashdrawer",
    icon: <DollarOutlined />,
    label: "Cash Drawer",
  },
  {
    key: "/setting",
    icon: <SettingOutlined />,
    label: "Setting",
  },
];

const SideBar = ({ onCollapse }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(location.pathname);

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  const onMenuClick = (e) => {
    navigate(e.key);
  };

  const handleCollapse = (value) => {
    setCollapsed(value);
    onCollapse(value);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      width={120}
      onCollapse={handleCollapse}
      theme="light"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 75,
        bottom: 0,
      }}
    >
      <Menu
        defaultSelectedKeys={[selectedKey]}
        mode="inline"
        theme="light"
        onClick={onMenuClick}
      >
        {items.map((item) => (
          <div className="tab">
            <Menu.Item
              key={item.key}
              icon={item.icon}
            >
              <span>{item.label}</span> 
            </Menu.Item>
          </div>
        ))}
      </Menu>
    </Sider>
  );
};

export default SideBar;
import React from 'react';
import './App.css';
import {Menu, Icon} from 'antd'
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <nav>
      <Menu style={{textAlign: 'center'}} mode="horizontal" theme="dark">

        <Menu.Item key="mail">
          <Icon type="home" />
          <Link to="/screensource" ></Link>
          Sources
        </Menu.Item>

        <Menu.Item key="test">
          <Icon type="read" />
          <Link to="/screenmyarticles" ></Link>
          My Articles
        </Menu.Item>

        <Menu.Item key="app">
          <Icon type="logout" />
          <Link to="/" ></Link>
          Logout
        </Menu.Item>

      </Menu>
    </nav>
  );
}

export default Nav;

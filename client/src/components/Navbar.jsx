import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import {MenuOutlined } from '@ant-design/icons'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
        <Typography.Title level={2} className='logo'>
            <Link to='/'>Greenlist</Link>
        </Typography.Title>
        </div>
        <Menu theme='dark'>
          <Menu.Item>
            <Link to='/'>Главная</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/News'>Новости</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/Exch'>Обмен</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/Profile'>Кабинет</Link>
          </Menu.Item>
        </Menu>
    </div>
  )
}

export default Navbar

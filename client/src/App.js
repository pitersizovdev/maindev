import React from 'react'
import { Routes, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, News, Exch, Profile, Cryptocurrencies } from './components';
import './styles/App.css'

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'><Navbar/></div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Routes>
                        <Route exact path='/' element={<Homepage/>}/>
                        <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                        <Route exact path='/news' element={<News/>}/>
                        <Route exact path='/exch' element={<Exch/>}/>
                        <Route exact path='/profile' element={<Profile/>}/>
                    </Routes>
                </div>
            </Layout>
        </div>
        <div className='footer'>
            <Typography.Title level={5} >
            Sizov Piter 4-MD-15 2024
            </Typography.Title>
        </div>
      
    </div>
  )
}

export default App

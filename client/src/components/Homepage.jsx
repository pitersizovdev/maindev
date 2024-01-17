import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Cryptocurrencies, News }from '.';



const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return 'Loading...';

  console.log(data);

  return (
    <>
      <Typography.Title level={2} className='heading'>Рейтинг монет</Typography.Title>
      <Row>
        <Col span={12}><Statistic title='Монет на рынке' value={globalStats.total}/></Col>
        <Col span={12}><Statistic title='Биржи' value={globalStats.totalExchanges}/></Col>
        <Col span={12}><Statistic title='Капитализация' value={`$ ${millify(globalStats.totalMarketCap)}`}/></Col>
        <Col span={12}><Statistic title='Объем 24ч' value={`$ ${millify(globalStats.total24hVolume)}`}/></Col>
      </Row>

      <div className='home-heading-container'>
        <Typography.Title level={2} className='home-title'>Топ 10 криптовалют</Typography.Title>
        <Typography.Title level={2} className='show-more'><Link to='/cryptocurrencies'>Еще</Link></Typography.Title>
      </div>
      <Cryptocurrencies simplified/>

      <div className='home-heading-container'>
        <Typography.Title level={2} className='home-title'>Последние новости</Typography.Title>
        <Typography.Title level={2} className='show-more'><Link to='/news'>Еще</Link></Typography.Title>
      </div>
      <News simplified/>
    </>
  )
}

export default Homepage

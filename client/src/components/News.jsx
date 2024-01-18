import React , {useState, useEffect} from 'react';
import { Row, Col, Card, Typography, Input } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Title } = Typography;

const News = ({ simplified }) => {
  const { data: cryptoNewsList, isFetching } = useGetCryptoNewsQuery({ newsCategory: 'Новости криптовалют' });
  const [cryptoNews, setCryptoNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = cryptoNewsList?.data?.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptoNews(filteredData);
  }, [cryptoNewsList, searchTerm]);

  if (isFetching) return 'Loading...';
  if (!cryptoNewsList?.data) return null; 

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <>
      {!simplified && (
        <div className='search-crypto-news'>
          <Input
            placeholder='Поиск по новостям'
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[24, 24]}>
        {cryptoNews?.slice(0, simplified ? 6 : cryptoNews.length).map((news, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="news-card">
                <a href={news.link} target="_blank" rel="noreferrer">
                  <div className="news-card-details">
                    <Title level={4} className="news-title">{news.title}</Title>
                  </div>
                  <div className='provider-container'>
                    <img className='provider-icon' src={news.source_favicon_url} alt='' style={{ width: '30px', height: '30px' }}/>
                    <Typography.Text>{news.source_url.replace(/https?:\/\/(www\.)?/i, '')}</Typography.Text>
                  </div>
                </a>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default News;
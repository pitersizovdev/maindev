import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { getNews } from '../../../api/apiNews';



const News = () => {

  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main>
      News
    </main>
  );
};

export default News;

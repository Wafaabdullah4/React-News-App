import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap'; // Tambahkan ini
import NewsItem from './NewsItem';

const NewsBoard = ({ category, onLoadingChange }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            onLoadingChange(true);
            setError(null);


            try {
                // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
                let url = `https://gnews.io/api/v4/search?q=${category}&lang=en&country=us&max=100&apikey=${import.meta.env.VITE_API_KEY}`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error ! status ${response.status}`);
                }

                const data = await response.json();

                // jika response valid

                if (data.articles) {
                    setArticles(data.articles);
                } else {
                    throw new Error('Data tidak ditemukan di API')
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
                onLoadingChange(false);
            }
        }

        // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        // fetch(url)
        //   .then((response) => response.json())
        //   .then((data) => {
        //     setArticles(data.articles);
        //     setLoading(false);

        //   });
        fetchData();
    }, [category]);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-danger mt-5">
                <h4>Error: {error}</h4>
            </div>
        );
    }


    return (
        <div>
            <h2 className="text-center text-white my-5" style={{ zIndex: 9999, position: 'relative' }}>
                Latest <span className="badge bg-dark">News</span>
            </h2>

            <Container>
                <Row>
                    {articles.map((news, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                            <NewsItem
                                title={news.title}
                                description={news.description}
                                src={news.image}
                                url={news.url}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default NewsBoard;

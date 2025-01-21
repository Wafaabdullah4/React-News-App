import React from 'react';
import { Card, Button } from 'react-bootstrap';
import newsImage from '../assets/news.jpg'
const NewsItem = ({ title, description, src, url }) => {
  return (
    <Card
    className="text-light mb-3 mx-2 shadow-lg"
    style={{
      maxWidth: '545px',
      background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)', // Gradien lembut
      borderRadius: '10px', // Sudut membulat untuk tampilan lebih lembut
      border: 'none', // Tanpa border default
    }}
  >
      <Card.Img
        variant="top"
        src={src?src:newsImage}
        style={{
          height: '200px',
          width: '100%',
          objectFit: 'cover',
        }}
      />
      <Card.Body>
        <Card.Title>{title.slice(0, 50)}</Card.Title>
        <Card.Text>
          {description ? description.slice(0, 90) : 'News info'}
        </Card.Text>
        <Button
          href={url}
          className="btn btn-primary text-white btn-lgmt-3"
          style={{
            background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #441752 100%)',
            border: 'none',
          }}
        >
          Read More
        </Button>

      </Card.Body>
    </Card>
  );
};

export default NewsItem;

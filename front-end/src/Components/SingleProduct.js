import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const SingleProduct = ({product}) => {

  return (
    <Card className="my-3 p-3 rounded bg-secondary">
      <Link to={`/product/${product._id}`} style={{textDecoration: 'none'}}>
        <Card.Img src={product.image} variant="top"></Card.Img>
        <Card.Body>

          <Card.Title as="div"><strong>{product.name}</strong></Card.Title>
          <Card.Text as="div">
           <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
            </Card.Text>
            <Card.Text> <strong>$ {product.price}</strong></Card.Text>
        </Card.Body>

      </Link>
    </Card>
  );
};

export default SingleProduct;
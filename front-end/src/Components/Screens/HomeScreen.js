import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../../products';
import SingleProduct from '../SingleProduct';

const HomeScreen = () => {
  return (
    <>
     <h2>Best selling Products</h2> 
      <Row>
        {
          products.map( product => (
            <Col sm={12} md={6} lg={4} key={product._id}>
              <SingleProduct product={product}></SingleProduct>
            </Col>
          ))
        }
      </Row>
    </>
  );
};

export default HomeScreen;
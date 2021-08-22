import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Spinner from './../Spinner'
import Message from './../Message'
import SingleProduct from '../SingleProduct';
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return (
    <>
      <h2>Latest Products</h2>
      {
        loading ? <Spinner></Spinner> : error ? <Message variant="danger" ></Message> :
          <Row>
            {
              products.map(product => (
                <Col sm={12} md={6} lg={4} key={product._id}>
                  <SingleProduct product={product}></SingleProduct>
                </Col>
              ))
            }
          </Row>
      }

    </>
  );
};

export default HomeScreen;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Message from './../Message'
import SingleProduct from '../SingleProduct';
import SpinnerComponent from './../Spinner';
import { listProducts } from '../../actions/productActions'

const HomeScreen = () => {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { loading, error, products, page, pages } = productList

  console.log(products, 'product')

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])


  return (
    <>
      <h2>Latest Products</h2>
      {
        loading ? <SpinnerComponent></SpinnerComponent> : error ? <Message variant="danger" ></Message> :
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
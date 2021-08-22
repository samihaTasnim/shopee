import React, { useEffect } from 'react'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom';
import SpinnerComponent from './../Spinner'
import Rating from '../Rating';
import Message from '../../Components/Message';
import { listProductDetails } from '../../actions/productActions'

const ProductScreen = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(listProductDetails(id))
    console.log('dispatched');
  }, [dispatch, id])

  const productDetails = useSelector((state) => state.productDetailList)
  console.log(productDetails, 'productdetails');
  const { loading, error, product } = productDetails


  return (
    <>
      <Link className="btn btn-light my-3" to="/"> Go back</Link>
      {loading ? (
        <SpinnerComponent />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid></Image>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
              </ListGroup.Item>
              <ListGroup.Item>
                Price: ${product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>
                      Price:
                    </Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      Status:
                    </Col>
                    <Col>
                      {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-center" disabled={product.countInStock === 0}>
                  <Button className="btn my-2">
                    Add to cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
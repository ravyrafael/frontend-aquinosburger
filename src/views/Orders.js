import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import OrderList from '../components/orderList';

class Orders extends Component {
  render() {
    return (
      <Row>
        <Col>
          <OrderList />
        </Col>
      </Row>
    );
  }
}

export default Orders;

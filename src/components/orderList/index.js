import React, { Component } from 'react';
import { Card, Row, Col, CardColumns, ListGroup } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa'
import OrderListItem from '../orderListItem'
import './orderList.css';
import user from '../../images/user-50.png';

class OrderList extends Component {
  render() {
    return (
      <>
        <CardColumns id={"order-list"}>
          <Card className="order-list">
            <Card.Header>
              <Row>
                <Col xs={'auto'}>
                  <img src={user} className="order-list-header-image" alt="user" />
                </Col>
                <Col className="order-list-header-content">
                  <div className="text-right">10:30</div>
                  <div className="order-list-header-title">
                    <p>Title order</p>
                    </div>
                </Col>
              </Row>
            </Card.Header>
            <div>
              <ListGroup variant="flush">
                <OrderListItem></OrderListItem>
              </ListGroup>
              <Card.Footer className="text-center">
                <div className="card-footer-buttons">
                  <button className="btn" type="button"><FaPlus /></button>
                </div>
              </Card.Footer>
            </div>
          </Card>
        </CardColumns>
      </>
    );
  }
}
export default OrderList;
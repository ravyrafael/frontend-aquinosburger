import React, { Component } from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import './orderListItem.css';
import productImage from '../../images/hamburger-75.png';

class OrderListItem extends Component {
  render() {
    return (
      <>
        <ListGroup.Item className="order-list-item">
          <Row>
            <Col xs={"auto"} className="order-list-item-image">
              <div style={{ backgroundImage: `url("${productImage}")` }}></div>
            </Col>
            <Col >
              <div className="order-list-item-info pillar">
                <div>
                  <b>Hamburger</b>
                </div>
                <Row className="flo-1">
                  <Col className="pillar">
                    <div className="flo-1"></div>
                    <div className="flo-1">
                      <i>sem cebola</i>
                    </div>
                  </Col>
                  <Col xs={'auto'}>
                    <p className="float-right">1 de 2 pronto</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
      </>
    );
  }
}
export default OrderListItem;
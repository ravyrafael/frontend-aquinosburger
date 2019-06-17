import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { routes } from '../../Utils/routeUtils.js'

class SidebarCategory extends Component {

    render() {
        return (
            <>
                {routes.map(item => {
                    return (
                        <li key={item.name}>
                            <a className="sidebar-category container-fluid active" href={item.path}>
                                <Row className="nowrap">
                                    <Col xs="auto"><div className="sidebar-category-icon">{item.icone()}</div></Col>
                                    <Col className="sidebar-category-text">
                                        <Row className="nowrap"><Col>{item.name}</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </a>
                        </li>
                    )
                })}
            </>
        );
    }
}
export default SidebarCategory;
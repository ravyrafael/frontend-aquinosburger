import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { routes } from '../../Utils/routeUtils.js'

class SidebarCategory extends Component {
    state = {
        routes,
        active: "dashboard"
    }

    render() {
        return (
            <>
                {routes.map(item => {

                    return (
                        <li key={item.name}>
                            <a className="sidebar-category container-fluid active" onClick={()=>{this.setState({active:item.name})}} href={item.path}>
                                <Row className="nowrap">
                                    <Col xs="auto"><div className="sidebar-category-icon">{item.icone()}</div></Col>
                                    <Col className="sidebar-category-text">
                                        <Row><Col  className="nowrap">{item.name}</Col>
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
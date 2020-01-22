import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './styling'

class FormHeader extends Component {

    render() {
        // console.log()
        return (
            <Container>
                <Row style={styles.headerRow}>
                    <Col md>Owner</Col>
                    <Col md>Mineral Interest</Col>
                    <Col md>NPRI</Col>
                    <Col md>Lease</Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        )
    }
}

export default FormHeader
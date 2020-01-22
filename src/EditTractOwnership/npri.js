import React, { Component } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Icon from '../Icon'
import styles from './styling'

class NPRI extends Component {

    state = {
        npri: this.props.npri
    }

    changeValue (e) {
        const newValue = this.state.npri
        newValue[e.currentTarget.name] = e.currentTarget.value
        this.setState({npri: newValue})
        this.props.onChange(newValue)
    }

    render() {
        return (
            <Container>
                { this.state.npri ? (
                    <Row style={styles.regularRow} data-testid={'npri-' + this.state.npri.id}>
                        <Col md className="text-right">
                            <Icon icon="indent"/>
                            <Form.Control style={styles.shorter} name="owner" type="text" placeholder="NPRI interest"
                                value={this.state.npri.owner} onChange={this.changeValue.bind(this)} />
                        </Col>
                        <Col md></Col>
                        <Col md>
                            <InputGroup>
                                <Form.Control type="text" placeholder="NPRI amount" name="interest"
                                    onChange={this.changeValue.bind(this)} value={this.state.npri.interest} />
                                <InputGroup.Append>
                                    <InputGroup.Text>%</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                        <Col md></Col>
                        <Col md={1}>
                            <Button variant="light" id={this.state.npri.id}
                                    data-testid={'npri-' + this.state.npri.id + '.remove'}
                                    onClick={this.props.onDelete}>
                                <Icon icon="remove" />
                            </Button>
                        </Col>
                    </Row>
                ) : (
                    <Row style={styles.regularRow}>
                        <Col md="auto">No NPRIs</Col>
                    </Row>
                ) }
            </Container>
        )
    }
}

export default NPRI
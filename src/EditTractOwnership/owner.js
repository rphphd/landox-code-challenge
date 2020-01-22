import React, { Component } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Icon from '../Icon'
import styles from './styling'

class Owner extends Component {

    state = {
        mineralInterest: this.props.value
    }

    changeOwner(e) {
        const newValue = this.state.mineralInterest
        newValue[e.currentTarget.name] = e.currentTarget.value
        this.setState({mineralInterest: newValue})
        this.props.onChange(newValue)
    }

    render() {
        return (
            <Container>
                <Row style={styles.regularRow}>
                    <Col md>
                        <Form.Control type="text" placeholder="Owner"
                            data-testid={"mineralInterest-" + this.state.mineralInterest.id + ".owner"}
                            onChange={this.changeOwner.bind(this)}
                            value={this.state.mineralInterest.owner} name="owner"/>
                    </Col>
                    <Col md>
                        <InputGroup>
                            <Form.Control type="text" placeholder="Interest"
                                onChange={this.changeOwner.bind(this)}
                                value={this.state.mineralInterest.interest} name="interest"/>
                            <InputGroup.Append>
                                <InputGroup.Text>%</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                    <Col md></Col>
                    <Col md>
                        <Form.Control type="text" placeholder="Lease"
                            onChange={this.changeOwner.bind(this)}
                            value={this.state.mineralInterest.lease} name="lease"/>
                    </Col>
                    <Col md={1}>
                        <Button id={this.state.mineralInterest.id} variant="light"
                                data-testid={'mineralInterest-' + this.state.mineralInterest.id + '.remove'}
                                onClick={this.props.onDelete}>
                            <Icon icon="remove" />
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Owner
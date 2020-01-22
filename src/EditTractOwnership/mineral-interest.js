import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import uuidv4 from 'uuid/v4'
import NPRI from './npri'
import Icon from '../Icon'
import styles from './styling'

import Owner from './owner'

class MineralInterest extends Component {

    state = {
        mineralInterest: this.props.mineralInterest
    }

    addNPRI () {
        const currentMineralInterest = this.state.mineralInterest
        currentMineralInterest.npris.push({
            id: uuidv4(),
            owner: '',
            interest: ''
        })
        this.setState({ mineralInterest: currentMineralInterest })
        this.props.onChange(currentMineralInterest)
    }

    changeNPRI (newValue) {
        const minInterest = this.state.mineralInterest
        const changedNpriIndex = minInterest.npris.findIndex(n => n.id === newValue.id)
        minInterest.npris[changedNpriIndex] = newValue
        this.setState({ mineralInterest: minInterest })
        this.props.onChange(minInterest)
    }

    deleteNPRI (e) {
        const npriId = e.currentTarget.id
        const minInterest = this.state.mineralInterest
        const deletedNpriIndex = minInterest.npris.findIndex(n => n.id === npriId)
        minInterest.npris.splice(deletedNpriIndex, 1)
        this.setState({ mineralInterest: minInterest })
        this.props.onChange(minInterest)
    }

    changeMineralInterest (newValue) {
        this.setState({ mineralInterest: newValue })
        this.props.onChange(newValue)
    }

    render() {
        let currentMineralInterest = this.state.mineralInterest ? (
            <div data-testid={'mineralInterest-' + this.state.mineralInterest.id}>
                <Owner value={this.state.mineralInterest}
                    onChange={this.changeMineralInterest.bind(this)}
                    onDelete={this.props.onDelete} />
                { this.state.mineralInterest.npris ? this.state.mineralInterest.npris.map( value => {
                    return (
                        <NPRI key={value.id} npri={value} onChange={this.changeNPRI.bind(this)} onDelete={this.deleteNPRI.bind(this)} />
                    )
                    }) : (<div>There are no NPRIs</div>)
                }
                <Container>
                    <Row style={styles.regularRow}>
                        <Col md={3} className="text-right">
                            <Button variant="light" onClick={this.addNPRI.bind(this)}>
                                <Icon icon="add" /><span>Add NPRI</span>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        ) : (<div></div>)
        return currentMineralInterest
    }
}

export default MineralInterest
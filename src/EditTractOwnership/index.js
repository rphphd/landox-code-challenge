import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import uuidv4 from 'uuid/v4'
import Icon from '../Icon'
import MineralInterest from './mineral-interest'
import FormHeader from './form-header';
import styles from './styling'

const EditTractOwnership = ({ value = [], onChange = () => { } }) => {

  const mineralInterests = value

  const addMineralInterest = ()  => {
    mineralInterests.push({
      id: uuidv4(),
      owner: '',
      interest: '',
      lease: '',
      npris: []

    })
    onChange(mineralInterests)
  }

  const changeMineralInterest = newValue => {
    console.log('changeMineralInterest', newValue)
    const changedMI = mineralInterests.findIndex(mi => mi.id === newValue.id)
    console.log('changeMineralInterest changedMI', changedMI)
    mineralInterests[changedMI] = newValue
    onChange(mineralInterests)
  }

  const deleteMineralInterest = item => {
    console.log('deleteMineralInterest', item, item.currentTarget.id)
    const changedMI = mineralInterests.findIndex(mi => mi.id === item.currentTarget.id)
    mineralInterests.splice(changedMI, 1)
    onChange(mineralInterests)
  }

  const addButton = (
    <Container>
      <Row style={styles.regularRow}>
          <Col md={3} className="text-right">
            <Button variant="light" onClick={addMineralInterest}>
              <Icon icon="add" /><span>Add Mineral Interest</span>
            </Button>
          </Col>
      </Row>
    </Container>
  )

  function tractPage (mineralInterests) {
    return (
      mineralInterests && mineralInterests.length > 0 ? (
        <div>
        <FormHeader />
        {mineralInterests.map( (mi) => {
          return(
            <MineralInterest key={mi.id} mineralInterest={mi}
              onDelete={deleteMineralInterest}
              onChange={changeMineralInterest}/>
          )
        })}
        {addButton}
      </div>
      ) : (<div><FormHeader />No Mineral Interests{addButton}</div>)
    )
  }

  return tractPage(mineralInterests);
}

export default EditTractOwnership;

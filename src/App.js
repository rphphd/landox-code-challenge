import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import uuidv4 from 'uuid/v4'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import EditTractOwnership from './EditTractOwnership'
import Icon from './Icon'

let tractOwnerships = [{
  id: uuidv4(),
  owner: "Luke Skywalker",
  interest: 0.5,
  lease: "Tatooine Lease",
  npris: [{
    id: uuidv4(),
    owner: "Leia Organa",
    interest: 0.45
  }, {
    id: uuidv4(),
    owner: "Han Solo",
    interest: 0.15
  }]
}]

const changedTract = newValue => {
  console.log('changedTract', newValue)
  tractOwnerships = newValue
  console.log('changedTract this', changedTract)
  let element = (
    <EditTractOwnership value={tractOwnerships} onChange={changedTract}/>)
  ReactDOM.render(
    element,
    document.getElementById('tract-page'));
}

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1>Landdox Code Challenge <Icon icon="smile" /></h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col id="tract-page">
          <EditTractOwnership value={tractOwnerships} onChange={changedTract}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';
import NavieBar from './components/NavieBar';
import SweaterCard from './components/SweaterCard';
import SweaterView from './components/SweaterView';

const App = () => {

  return (
    <Router>
      <Container>
        <NavieBar />
        <br />
        <Row>
          <Route path='/' component={SweaterCard} exact />
        </Row>
        <Route path='/sweaterview/:id?' component={SweaterView} />
      </Container>
    </Router>
  )
}

export default App
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';
import NavieBar from './components/NavieBar';
import SweaterCard from './components/SweaterCard';
import SweaterView from './components/SweaterView';
import SweaterFit from './components/SweaterFit';

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
        <Route path='/sweaterfit' component={SweaterFit} />
      </Container>
    </Router>
  )
}

export default App
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';
import NavieBar from './components/NavieBar';
import SweaterCard from './components/SweaterCard';
import SweaterView from './components/SweaterView';
import SweaterFit from './components/SweaterFit';
import SweaterSeason from './components/SweaterSeason';
import Footer from './components/Footer';

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
        <Route path='/sweaterseason' component={SweaterSeason} />
        <Footer />
      </Container>
    </Router>
  )
}

export default App
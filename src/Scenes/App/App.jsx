import React from 'react';
import Videos from './_/Videos';
import { Navbar, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';

import './App.css';

export default function App() {
  return (
    <div className="app">
          <Navbar fixedTop>
            <Row>
              <Col md={3}>
                <Navbar.Header>
                  <Navbar.Brand>
                    <Link id="home" to="inicio" href="#home" spy smooth duration={500} offset={-70}>Museu da<span>Imprensa</span></Link>
                  </Navbar.Brand>
                </Navbar.Header>
              </Col>
            </Row>
				</Navbar>
      <Videos />
    </div>
  );
}
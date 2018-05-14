import React from 'react';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <header>
        <Navbar>
        	<Grid>
        		<Row>
        		<Col md={4}>
					<Navbar.Header>
						<Navbar.Brand>
						  <a href="#home">React-Bootstrap</a>
						</Navbar.Brand>
					</Navbar.Header>
				</Col>
				<Col md={8}>
					<Nav className="header-nav-menu">
						<NavItem eventKey={1} href="#">
						  INÍCIO
						</NavItem>
						<NavItem eventKey={2} href="#">
						  ACERVO
						</NavItem>
						<NavItem eventKey={3} href="#">
						  O MUSEU
						</NavItem>
						<NavItem eventKey={4} href="#">
						  VÍDEOS
						</NavItem>
						<NavItem eventKey={5} href="#">
						  PASSEIO VIRTUAL
						</NavItem>
					</Nav>
				</Col>
				</Row>
			</Grid>
		</Navbar>
      </header>
    </div>
  );
}

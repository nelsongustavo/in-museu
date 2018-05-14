import React from 'react';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <header>
        <Navbar>
        	<Row>
        		<Col md={4}>
							<Navbar.Header>
								<Navbar.Brand>
								  <a href="#home">Museu da<span>Imprensa</span></a>
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
				</Navbar>
				<div className="banner-header">
					<Grid>
						<Row>
							<Col md={6}>
								<h1>Rotativa Leopoldo de Bulhões</h1>
							</Col>
						</Row>
						<Row>
							<Col md={4}>
								<p>Confira em nosso <span>tour virtual</span> um pouco mais da história da  <span>primeira rotativa</span> de grande porte <span>importada pelo Brasil</span> no Governo Rodrigues Alves para <span>servir a Imprensa Nacional.</span></p>
							</Col>
						</Row>
					</Grid>
				</div>
      </header>
    </div>
  );
}

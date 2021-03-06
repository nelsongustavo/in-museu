import React from 'react';
import { Navbar, Nav, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <header>
				<div id="barra-brasil">
					<ul id="menu-barra-temp">
						<li>
								<a href="http://brasil.gov.br">Portal do Governo Brasileiro</a>
						</li>
					</ul>
				</div>
        <Navbar fixedTop>
					<Row>
        		<Col md={3}>
							<Navbar.Header>
								<Navbar.Brand>
									<Link id="home" to="inicio" href="#home" spy smooth duration={500} offset={-140}>Museu da<span>Imprensa</span></Link>
								</Navbar.Brand>
							</Navbar.Header>
						</Col>
						<Col md={9}>
							<Nav className="header-nav-menu">
								<li><Link to="museu" href="#" spy smooth duration={500} offset={-70}>O MUSEU</Link></li>
								<li><Link to="acervo" href="#" spy smooth duration={500} offset={-150}>ACERVO</Link></li>
								<li><Link to="videos" href="#" spy smooth duration={500} offset={-90}>VÍDEOS</Link></li>
								<li><Link to="virtual" href="#" spy smooth duration={500} offset={-120}>PASSEIO VIRTUAL</Link></li>
								<li><Link to="museu-competition" href="#" spy smooth duration={500} offset={-150}>CONCURSO DO MUSEU</Link></li>
							</Nav>
						</Col>
					</Row>
				</Navbar>
				<div id="inicio" className="banner-header element">
					<Grid>
						<Row>
							<Col md={6}>
								<h1>Rotativa Leopoldo de Bulhões</h1>
							</Col>
						</Row>
						<Row>
							<Col md={4}>
								<p>Confira em nosso <span>“Tour Virtual”</span> um pouco mais da história da <span>primeira rotativa</span> de grande porte <span>importada pelo Brasil</span>, no Governo Rodrigues Alves, para <span>servir à Imprensa Nacional.</span></p>
							</Col>
						</Row>
					</Grid>
				</div>
				<div className="button-bottom">
					<Grid>
						<Row>
							<Col md={2} mdOffset={5}>
								<Link className="next-section" to="museu" spy smooth duration={500} offset={-70}>&nbsp;</Link>
							</Col>
						</Row>
					</Grid>
				</div>
      </header>
    </div>
  );
}

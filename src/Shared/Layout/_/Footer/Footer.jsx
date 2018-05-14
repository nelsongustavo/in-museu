import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll'
import './Footer.css';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  
  scrollToTop() {
    scroll.scrollToTop({
      duration: 500,
      smooth: true
    });
  }

  render () {
    return (
      <div className="layout-footer">
        <footer>
          <Navbar>
            <Row>
              <Col md={12}>
                <Nav className="footer-nav-menu">
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
                <Nav pullRight className="back-to-top">
                  <NavItem eventKey={6} href="#" onClick={this.scrollToTop}>
                    VOLTAR AO TOPO
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Navbar>
          <Grid className="info-footer">
            <Row>
              <Col md={6}>
                <p>Todos os direitos reservados ao Museu da Imprensa Nacional. Todo o conteúdo aqui exposto está disponível também no "Tour Virtual" e pode ser conferido fora da Imprensa Nacional, leve o museu com você e convide seus amigos para conhecer esse pedacinho da história do Brasil.</p>
              </Col>
              <Col md={2} mdOffset={2}>
                <p>Segunda à Sexta (08h as 18h)</p>
                <p>Agende uma visita guiada:</p>
                <p>61 3441-9618</p>
                <p>61 3441-9680</p>
              </Col>
              <Col md={2}>
                <p>Setor de Industrias Gráficas</p>
                <p>SIG Quadra 06, Lote 800</p>
                <p>Cruzeiro/Sudoeste/Octogonal</p>
                <p>Brasília - DF, 70610-460</p>
              </Col>
            </Row>
          </Grid>
        </footer>
      </div>
    );
  }
}

export default Footer;
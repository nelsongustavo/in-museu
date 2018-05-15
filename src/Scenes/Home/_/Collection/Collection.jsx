import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import './Collection.css';

export default function Collection() {

  return (
    <div className="collection">
      <Grid>
      	<Row>
      		<Col md={12} className="header-section">
						<h1>Acervo</h1>
            <div className="header-line"></div>
					</Col>
      	</Row>
      	<Row className="section-gallery">
      		<Col md={3}>
            <a href="#" title="Exposição da Nau Medusa em miniatura - 15/05/2018">
        			<img src="/images/foto_07.png" alt="" />
        			<h3>Exposição da Nau Medusa em miniatura</h3>
        			<time datetime="15/05/2018">15 MAIO 2018</time>
            </a>
      		</Col>
      		<Col md={3}>
      			<a href="#" title="Caixa Centenária da Independência - 15/05/2018">
              <img src="/images/foto_02.png" alt="" />
        			<h3>Caixa Centenária da Independência</h3>
        			<time datetime="15/05/2018">15 MAIO 2018</time>
            </a>
      		</Col>
      		<Col md={3}>
      			<a href="#" title="">
              <img src="/images/foto_27.png" alt="Teclado Perfurador Monotipo Joana França - 15/05/2018" />
        			<h3>Teclado Perfurador Monotipo Joana França</h3>
        			<time datetime="15/05/2018">15 MAIO 2018</time>
            </a>
      		</Col>
      		<Col md={3}>
      			<a href="#" title="">
              <img src="/images/foto_12.png" alt="Composição Vitrine Florões - 15/05/2018" />
        			<h3>Composição Vitrine Florões</h3>
        			<time datetime="15/05/2018">15 MAIO 2018</time>
            </a>
      		</Col>
      	</Row>
      </Grid>
    </div>
  );
};
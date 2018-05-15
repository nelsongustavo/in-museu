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
					</Col>
      	</Row>
      	<Row className="section-gallery">
      		<Col md={3}>
      			<img src="/images/foto_07.png" alt="" />
      			<h3>Exposição da Nau Medusa em miniatura</h3>
      			<time datetime="15/05/2018">15 MAIO 2018</time>
      		</Col>
      		<Col md={3}>
      			<img src="/images/foto_02.png" alt="" />
      			<h3>Caixa Centenária da Independência</h3>
      			<time datetime="15/05/2018">15 MAIO 2018</time>
      		</Col>
      		<Col md={3}>
      			<img src="/images/foto_27.png" alt="" />
      			<h3>Teclado Perfurador Monotipo Joana França</h3>
      			<time datetime="15/05/2018">15 MAIO 2018</time>
      		</Col>
      		<Col md={3}>
      			<img src="/images/foto_12.png" alt="" />
      			<h3>Composição Vitrine Florões</h3>
      			<time datetime="15/05/2018">15 MAIO 2018</time>
      		</Col>
      	</Row>
      </Grid>
    </div>
  );
};
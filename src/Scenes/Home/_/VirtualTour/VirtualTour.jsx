import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import './VirtualTour.css';

export default function VirtualTour() {

  return (
    <div id="virtual" className="virtual-tour">
			<Grid>
				<Row>
					<Col md={12} className="header-section">
						<h1>Passeio Virtual</h1>
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<img src="/images/foto_17.png" alt="" />
					</Col>
					<Col md={3}>
						<img src="/images/foto_18.png" alt="" />
					</Col>
					<Col md={3}>
						<img src="/images/foto_23.png" alt="" />
					</Col>
					<Col md={3}>
						<img src="/images/foto_20.png" alt="" />
					</Col>
				</Row>
				<Row>
					<Col md={4} mdOffset={4} className="btn-section">
						<a href="#" className="custom-btn" title="Acesse nosso Tour Virtual">ACESSE AGORA</a>
					</Col>
				</Row>
			</Grid>
    </div>
  );
};
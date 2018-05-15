import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import TourModal from './_/TourModal';
import './VirtualTour.css';

export default class VirtualTour extends Component {

	constructor(props) {
    super(props);

    this.state = {
      showModal: false,
		};
		
		this.closeModal = this.closeModal.bind(this);
		this.handleModalButton = this.handleModalButton.bind(this);
	}

	handleModalButton() {
    this.setState({
     showModal: true
   });
  }
	
	closeModal() {
    this.setState({
      showModal: false
    })
  }

	render() {
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
							<a href="#virtualTour" onClick={this.handleModalButton} className="custom-btn" title="Acesse nosso Tour Virtual">ACESSE AGORA</a>
						</Col>
					</Row>
				</Grid>
				{ this.state.showModal ? <TourModal title="Acesse nosso Tour Virtual" src="http://museuvirtual.in.gov.br" closeModal={this.closeModal} /> : null }
			</div>
		);
	}
};
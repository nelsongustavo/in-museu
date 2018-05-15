import React, { Component } from "react";
import _ from "lodash";
import { Grid, Row, Col } from 'react-bootstrap';
import Modal from './_/ImageModal';
import './Collection.css';

const images = [
  {
		id: 1,
    src: '/images/foto_07.png',
    content: 'Exposição da Nau Medusa em miniatura',
		dateTime: '15/05/2018',
		date: '15 MAIO 2018'
  },
  {
		id: 2,
    src: '/images/foto_02.png',
    content: 'Caixa Centenária da Independência',
		dateTime: '15/05/2018',
		date: '15 MAIO 2018'
	},
	{
		id: 3,
    src: '/images/foto_27.png',
    content: 'Teclado Perfurador Monotipo Joana França',
		dateTime: '15/05/2018',
		date: '15 MAIO 2018'
	},
	{
		id: 4,
    src: '/images/foto_12.png',
    content: 'Composição Vitrine Florões',
		dateTime: '15/05/2018',
		date: '15 MAIO 2018'
	}
];

export default class Collection extends Component {
	
  constructor(props) {
    super(props);
    
    this.state = {
      showModal: false,
      index: 0
		};

		this.handleModalButton = this.handleModalButton.bind(this);
		this.nextImage = this.nextImage.bind(this);
		this.prevImage = this.prevImage.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	handleModalButton(index) {
    this.setState({
     showModal: true,
     index
   });
  }

	renderImages() {
    return _.map(images, (image, i) => {
      return (
        <Col
					md={3}
          key={image.id}
					onClick={() => this.handleModalButton(i)}
        >
					<img src={image.src} alt={image.content} />
					<h3>{image.content}</h3>
					<time datetime={image.dateTime}>{image.date}</time>
        </Col>
      );
    });
	}
	
	nextImage() {
    this.setState({ index: (this.state.index + 1) % images.length });
  }

  prevImage() {
    const i = this.state.index;
    this.setState({index: i===0?images.length-1:i-1})
  }

  closeModal() {
    this.setState({
      showModal: false,
      index: 0
    })
  }

	render() {
		
		const image = images[this.state.index];
		
		return (
			<div className="collection">
				<Grid>
					<Row>
						<Col md={12} className="header-section">
							<h1>Acervo</h1>
						</Col>
					</Row>
					<Row className="section-gallery">
					 { this.renderImages() }
					</Row>
				</Grid>
				{ this.state.showModal ? <Modal content={image.content} src={image.src} closeModal={this.closeModal} prevImage={this.prevImage} nextImage={this.nextImage} /> : null }
			</div>
		);
	}
};
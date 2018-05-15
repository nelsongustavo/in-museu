import React, { Component } from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import Image from '../Image';
import './ImageModal.css';

class ImageModal extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false}, () => {
      this.props.closeModal();
    });
  }

  nextImage() {
    this.props.nextImage();
  }

  prevImage() {
    this.props.prevImage();
  }

  render() {
    return (
      <div className="modal">
        <BootstrapModal show={this.state.modalIsOpen} onHide={this.closeModal}>
         <BootstrapModal.Header closeButton>
           <BootstrapModal.Title>{this.props.content}</BootstrapModal.Title>
         </BootstrapModal.Header>
         <BootstrapModal.Body>
          <Image src={this.props.src} />
          
          <a className="prev" onClick={this.prevImage}>&#10094;</a>
          <a className="next" onClick={this.nextImage}>&#10095;</a>

         </BootstrapModal.Body>
         <BootstrapModal.Footer>
           <p>Videos da imprensa Nacional</p>
         </BootstrapModal.Footer>
       </BootstrapModal>
      </div>
    );
  }
}

export default ImageModal;
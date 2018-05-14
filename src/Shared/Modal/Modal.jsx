import React, { Component } from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import Video from '../Video';
import './Modal.css';

class Modal extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.prevVideo = this.prevVideo.bind(this);
    this.nextVideo = this.nextVideo.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false}, () => {
      this.props.closeModal();
    });
  }

  nextVideo() {
    this.props.nextVideo();
  }

  prevVideo() {
    this.props.prevVideo();
  }

  render() {
    return (
      <div className="modal">
        <BootstrapModal show={this.state.modalIsOpen} onHide={this.closeModal}>
         <BootstrapModal.Header closeButton>
           <BootstrapModal.Title>{this.props.title}</BootstrapModal.Title>
         </BootstrapModal.Header>
         <BootstrapModal.Body>
          <Video videoId={this.props.videoId} />
          
          <a className="prev" onClick={this.prevVideo}>&#10094;</a>
          <a className="next" onClick={this.nextVideo}>&#10095;</a>

         </BootstrapModal.Body>
         <BootstrapModal.Footer>
           <p>Videos da imprensa Nacional</p>
         </BootstrapModal.Footer>
       </BootstrapModal>
      </div>
    );
  }
}

export default Modal;
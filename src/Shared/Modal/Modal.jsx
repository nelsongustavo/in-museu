import React, { Component } from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import Video from '../Video';
import './Modal.css';

class Modal extends Component {

  constructor() {
    super();

    this.state = {
      email: "",
      message: "",
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false}, () => {
      this.props.closeForm();
    });
  }

  render() {
    return (
      <div className="modal">
        <BootstrapModal show={this.state.modalIsOpen} onHide={this.closeModal}>
         <BootstrapModal.Header closeButton>
           <BootstrapModal.Title>{this.props.title}</BootstrapModal.Title>
         </BootstrapModal.Header>
         <BootstrapModal.Body>
          <Video videoId="xLzQ1m-Q9Rg" />
         </BootstrapModal.Body>
         <BootstrapModal.Footer>
           <p>Suas informações estão seguras.</p>
         </BootstrapModal.Footer>
       </BootstrapModal>
      </div>
    );
  }
}

export default Modal;
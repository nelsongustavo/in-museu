import React, { Component } from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import './TourModal.css';

class TourModal extends Component {

  constructor() {
    super();

    this.state = {
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
      this.props.closeModal();
    });
  }

  render() {
    return (
      <div className="tour-modal">
        <BootstrapModal show={this.state.modalIsOpen} onHide={this.closeModal} dialogClassName="custom-modal">
         <BootstrapModal.Header closeButton>
           <BootstrapModal.Title>{this.props.content}</BootstrapModal.Title>
         </BootstrapModal.Header>
         <BootstrapModal.Body>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" frameBorder="0" allowFullScreen="1" title="TourModal" src={this.props.src} />
          </div>
         </BootstrapModal.Body>
         <BootstrapModal.Footer>
           <p>Tour Da Imprensa</p>
         </BootstrapModal.Footer>
       </BootstrapModal>
      </div>
    );
  }
}

export default TourModal;
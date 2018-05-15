import React, { Component } from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import Video from '../Video';
import './VideoModal.css';

class VideoModal extends Component {

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
        <BootstrapModal show={this.state.modalIsOpen} onHide={this.closeModal} dialogClassName="custom-modal">
         <BootstrapModal.Header closeButton>
           <BootstrapModal.Title>{this.props.title}</BootstrapModal.Title>
         </BootstrapModal.Header>
         <BootstrapModal.Body>
          <Video videoId={this.props.videoId} />
          
          <a className="prev" onClick={this.prevVideo}><img src="/images/button-left.svg" alt="prev" /></a>
          <a className="next" onClick={this.nextVideo}><img src="/images/button-right.svg" alt="next" /></a>

         </BootstrapModal.Body>
         <BootstrapModal.Footer>
           <p>Videos da imprensa Nacional</p>
         </BootstrapModal.Footer>
       </BootstrapModal>
      </div>
    );
  }
}

export default VideoModal;
import React, { Component } from "react";
import _ from "lodash";
import { Button } from 'react-bootstrap';
import Modal from '../../../../Shared/Modal';
import './Videos.css';

const videos = [
  {
    title: 'Video 1',
    content: 'The dashboard is your main homepage. It will display a feed of looks...',
    videoId: 'bg9bGUewYzQ'
  },
  {
    title: 'Video 2',
    content: 'Discover allows you to find new looks, what is trending and search for looks, brands and users',
    videoId: 'xLzQ1m-Q9Rg'
  }
];

export default class Videos extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      showModal: false,
      index: 0
    };
    
    this.handleModalButton = this.handleModalButton.bind(this);
    this.nextVideo = this.nextVideo.bind(this);
    this.prevVideo = this.prevVideo.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  renderVideos() {
    return _.map(videos, (video, i) => {
      return (
        <Button
          key={video.videoId}
          bsStyle="danger"
          onClick={() => this.handleModalButton(i)}
          title={video.title}>
          {video.title}
        </Button>
      );
    });
  }

  handleModalButton(index) {
    this.setState({
     showModal: true,
     index
   });
  }

  nextVideo() {
    this.setState({ index: (this.state.index + 1) % videos.length });
  }

  prevVideo() {
    const i = this.state.index;
    this.setState({index: i==0?videos.length-1:i-1})
  }

  closeModal() {
    this.setState({
      showModal: false,
      videoId: ""
    })
  }
  
  render() {
    return (
      <div className="videos">
        { this.renderVideos() }
        { this.state.showModal ? <Modal title="Video Boladão" videoId={videos[this.state.index].videoId} closeModal={this.closeModal} prevVideo={this.prevVideo} nextVideo={this.nextVideo} /> : null }
      </div>
    );
  }
};
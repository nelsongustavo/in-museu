import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import _ from "lodash";
import Modal from './_/VideoModal';
import './Videos.css';

const videos = [
  {
    title: 'Conheça no detalhe a máquina de pautadeira da Imprensa',
    content: 'O Museu da Imprensa exibe modelos dessas máquinas, de origem norte-americana.',
    videoId: 'hp-nipVPp60',
    image: '/images/foto_08.png',
    date: 'Agosto/2018',
    push: false
  },
  {
    title: 'Conheça a última máquina usada na impressão do DOU',
    content: 'Neste vídeo é possível conferir um pouco como era o dia a dia da impressão do Diário Oficial da União antes da desativação oficial da impressão em papel.',
    videoId: '_kuv4L8rUOY',
    image: '/images/foto_04.png',
    date: 'Agosto/2018',
    push: true
  },
  {
    title: 'Conheça detalhes da Máquina Tipográfica Tip Top',
    content: 'Minervas sucederam as prensas e prelos. Na evolução histórica da impressão, elas sucederam as prensas tipográficas manuais, dos séculos XVI e XVII, e os prelos.',
    videoId: 'EXhfaDXATgg',
    image: '/images/foto_05.png',
    date: 'Agosto/2018',
    push: false
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
        <Row className="content-section" key={video.videoId} onClick={() => this.handleModalButton(i)}>
          <Col md={4} mdOffset={1} mdPush={video.push?6:0}>
            <img src={video.image} alt={video.title} />
          </Col>
          <Col md={6} mdOffset={1} mdPull={video.push?6:0}>
            <time datetime={video.date}>{video.date}</time>
            <div className="header-line-h" />
            <h2>{video.title}</h2>
            <p>{video.content}</p>
          </Col>
        </Row>
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
    this.setState({index: i===0?videos.length-1:i-1})
  }

  closeModal() {
    this.setState({
      showModal: false,
      index: 0
    })
  }

  render() {
    return (
      <div id="videos" className="videos">
        <Grid>
          <Row>
            <Col md={12} className="header-section">
              <h1>Vídeos</h1>
            </Col>
          </Row>
          { this.renderVideos() }
        </Grid>
        { this.state.showModal ? <Modal title={videos[this.state.index].title} videoId={videos[this.state.index].videoId} closeModal={this.closeModal} prevVideo={this.prevVideo} nextVideo={this.nextVideo} /> : null }
      </div>
    );
  }
};

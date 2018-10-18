import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import _ from "lodash";
import Video from './_/Video';
import './Videos.css';
import "video-react/dist/video-react.css";

const videos = [
  {
    title: 'Impressão do Diário Oficial da União',
    content: 'Veja como era o processo de impressão do Diário Oficial da União na Imprensa Nacional.',
    url: '/videos/impressora_atual.mp4',
    image: '/images/foto_04.png',
    date: 'AGOSTO 18',
    push: false
  },
  {
    title: 'Máquina pautadeira do Museu da Imprensa',
    content: 'O Museu da Imprensa exibe modelos dessas máquinas, de origem norte-americana.',
    url: '/videos/maquina_pautadeira.mp4',
    image: '/images/foto_08.png',
    date: 'AGOSTO 18',
    push: true
  },
  {
    title: 'Conheça a Máquina Tipográfica Tip Top',
    content: 'Minervas sucederam as prensas e prelos." Na evolução histórica da impressão, elas sucederam as prensas tipográficas manuais — dos séculos XVI e XVII — e os prelos.',
    url: '/videos/maquina_tip_top.mp4',
    image: '/images/foto_05.png',
    date: 'AGOSTO 18',
    push: false
  }
];

export default class Videos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };

    this.handleModalButton = this.handleModalButton.bind(this);
  }
  
  renderVideos() {
    return _.map(videos, (video, i) => {
      if (i !== this.state.index ) {
        return (
          <div className="content-section" key={video.url} onClick={() => this.handleModalButton(i)}>
            <Row>
              <Col md={3}>
                <img src={video.image} alt={video.title} />
              </Col>
              <Col md={9}>
                <h2>{video.title}</h2>
                <p>{video.content}</p>
              </Col>
            </Row>
          </div>
        );
      }
    });
  }

  renderCurrentVideo() {
    return (
      <div className="principal">
        <h1>{ videos[this.state.index].title }</h1>
        <p>{ videos[this.state.index].content }</p>
        <Video videoId={videos[this.state.index].url} poster={videos[this.state.index].image} />
      </div>
    )
  }

  handleModalButton(index) {
    this.setState({
     index
   });
  }

  render() {
    return (
      <div id="videos" className="videos-totem">
        <Grid>
          <Row>
            <Col md={8}>
              { this.renderCurrentVideo() }
            </Col>
            <Col className="highlights-column" md={4}>
              { this.renderVideos() }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
};
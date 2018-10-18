import React, { Component } from "react";
import { Grid, Col } from 'react-bootstrap';
import _ from "lodash";
import Video from './_/Video';
import './Videos.css';
import "video-react/dist/video-react.css";

const videos = [
  {
    title: 'Conheça no detalhe a máquina de pautadeira da Imprensa',
    content: 'O Museu da Imprensa exibe modelos dessas máquinas, de origem norte-americana.',
    url: '/videos/Pexels Videos 4718.mp4',
    image: '/images/foto_08.png',
    date: 'AGOSTO 18',
    push: false
  },
  {
    title: 'Conheça a ultima maquina usada na impressão do DOU',
    content: 'Neste vídeo é possível conferir um pouco como era o dia a dia de impressão do Diário Oficial da União antes da desativação oficial da impressão em papel.',
    url: '/videos/Pexels Videos 4721.mp4',
    image: '/images/foto_04.png',
    date: 'AGOSTO 18',
    push: true
  },
  {
    title: 'Conheça detalhes da Máquina Tipográfica Tip Top',
    content: 'Minervas sucederam as prensas e prelos." Na evolução histórica da impressão, elas sucederam as prensas tipográficas manuais — dos séculos XVI e XVII — e os prelos.',
    url: '/videos/Pexels Videos 1096625.mp4',
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
            <img src={video.image} alt={video.title} />
            <time datetime={video.date}>{video.date}</time>
            <div className="header-line-h" />
            <h2>{video.title}</h2>
            <p>{video.content}</p>
          </div>
        );
      }
    });
  }

  renderCurrentVideo() {
    return (
      <div classNama="principal">
        <Video videoId={videos[this.state.index].url} poster={videos[this.state.index].image} />
        <p>{ videos[this.state.index].title }</p>
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
      <div id="videos" className="videos">
        <Grid>
          <Col md={6}>
            { this.renderCurrentVideo() }
          </Col>
          <Col md={6}>
          { this.renderVideos() }
          </Col>
        </Grid>
      </div>
    );
  }
};
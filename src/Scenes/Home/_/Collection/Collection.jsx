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
		date: '15 MAIO 2018',
		description: 'Embarcação confeccionada em comemoração aos 500 anos do Brasil e aniversário da Imprensa Nacional, em 13 de maio de 2000. Nau de linha, de construção em madeira e de propulsão à vela, construída no arsenal de Lisboa com as melhores madeiras do Brasil e lançada ao mar em 29 de agosto de 1786. Media 56m de quilha, 14m de boca e 11m de pontal. Sua artilharia contava com 74 peças lisas, antecargas em baterias corridas. Tinha na proa uma figura da medusa, uma das três górgonas, cuja beleza era extraordinária, aumentada por uma cabeleira magnífica. Partiu incorporada à esquadra que conduziu ao Brasil a família real portuguesa, em 29 de novembro de 1807, sob o comando do Capitão de Mar e Guerra Henrique da Fonseca de Souza Prego. Em 1819, no porto do Rio de Janeiro, foi transformada em Cábrea e, assim, se conservou até a Independência. Ainda fazia esse serviço em 1825, mas tempos depois foi desarmada no ancoradouro da Saúde.'
  },
  {
		id: 2,
    src: '/images/foto_02.png',
    content: 'Caixa Centenária da Independência',
		dateTime: '15/05/2018',
		date: '15 MAIO 2018',
		description: 'Caixa executada em 1922, na oficina de encadernação da Imprensa Nacional, em madeira, couro e papel, com motivos decorativos em dourado, para figurar na exposição comemorativa do Centenário da Independência do Brasil. Na tampa, fotografia do prédio da Imprensa Nacional na Rua 13 de maio, no Rio de Janeiro. No interior, fotografias de D. Pedro I, com as Armas do Império, e de Epitácio Pessoa, com as Armas da República. Entre as duas fotografias, o mapa do Brasil. Dentro, pasta para assinatura dos visitantes à exposição. Fabricante: Setor de encadernação da Imprensa Nacional. Data: 1922. Origem: Rio de Janeiro.'
	},
	{
		id: 3,
    src: '/images/foto_27.png',
    content: 'Teclado Perfurador Monotipo Joana França',
		dateTime: '15/05/2018',
		date: '15 MAIO 2018',
		description: 'O exemplar do Museu da Imprensa é muito especial. Nele trabalhou, durante alguns meses, a primeira mulher a ser admitida no serviço público brasileiro: Joana França Stockmeyer. Em 1892, ela ingressou nos quadros da Imprensa Nacional, onde trabalhou como monotipista até a aposentadoria, em 1944. Decreto presidencial de 5 de março de 2008 conferiu a ela o título, in memoriam, de Patrona da Servidora Pública Brasileira. A Imprensa Nacional decidiu homenagear Joana França identificando o monotipo com o seu nome. A peça exposta no Museu da Imprensa foi desativada do Setor de Monotipia da Imprensa Nacional e encaminhada para o acervo museológico, em 1980. Foi comprada pela Imprensa Nacional em 6 de outubro de 1943, pela quantia de CR$ 27.893,20 (vinte e sete mil, oitocentos e noventa e três cruzeiros e vinte centavos). Trata-se de um sistema composto de duas partes: um teclado que produzia uma fita de papel perfurada para ser inserida em uma fundidora que, por sua vez, fundia cada tipo na ordem correta. Parece bastante com uma máquina datilográfica. Possui cerca de 300 teclas, que correspondem a letras e sinais ou símbolos. Originalmente, o teclado perfurador monotipo funcionava a gás. O conjunto de teclas corresponde a cinco alfabetos diferentes, distinguidos pelas cores. Em cada tecla que era acionada, um mecanismo de ar comprimido intervinha automaticamente e transformava a letra ou sinal, correspondente à tecla pressionada, em uma combinação de duas perfurações sobre uma cinta de papel. Executava tanto trabalhos em linha corrida quanto de tabelas. Fabricante: Lanston Monotype Co., empresa do inventor do sistema Tolbert Lanston. Data: 1890. Origem: Pensilvânia – EUA.'
	},
	{
		id: 4,
    src: '/images/foto_12.png',
    content: 'Composição Vitrine Florões',
		dateTime: '15/05/2018',
		date: '15 MAIO 2018',
		description: 'Peça com cabo roliço em madeira, com cabeçote de ferro. Aparelho que serve para conter letras e outros caracteres, extraídos um a um dos caixotins, a fim de formar palavras ou linhas. Retirado do Setor de Acabamento, em 1980, para fazer parte do acervo do Museu. São eles: Florão em alusão a D. Pedro I; Florão em alusão a D. Pedro II; Florão de douração manual; Florão de douração manual (moldura).'
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
			<div id="acervo" className="collection">
				<Grid>
					<Row>
						<Col md={12} className="header-section">
							<h1>Acervo</h1>
							<div className="header-line" />
						</Col>
					</Row>
					<Row className="section-gallery">
					 { this.renderImages() }
					</Row>
				</Grid>
				{ this.state.showModal ? <Modal content={image.content} src={image.src} description={image.description} closeModal={this.closeModal} prevImage={this.prevImage} nextImage={this.nextImage} /> : null }
			</div>
		);
	}
};
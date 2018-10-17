import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import './MuseumCompetition.css';

export default function MuseumCompetition() {

  return (
    <div id="museu-competition" className="museum-competition">
			<Grid>
				<Row>
					<Col md={8} mdOffset="2" className="header-section">
						<h1>Concurso do Museu</h1>
		    		<div className="header-line" />
					</Col>
				</Row>
				<Row className="content-section">
					<Col md={3}>
				    <h3>A Imprensa Nacional divulga o Regulamento do 19º Concurso Nacional Museu da Imprensa: Desenho, Redação e Artigo como criar blog.</h3>
					</Col>
					<Col md={5}>
						<img src="/images/cartaz.jpg" alt="Imprensa Nacional divulga o Regulamento do 19º Concurso Nacional Museu da Imprensa: Desenho, Redação e Artigo como criar blog" />
					</Col>
					<Col md={4}>
						<p>No esforço continuado de cumprir a sua responsabilidade educacional e sociocultural de estimular a reflexão sobre os valores da memória nacional, a Imprensa Nacional realiza o 19º Concurso Nacional Museu da Imprensa, acreditando no comprometimento e no talento dos (das) jovens estudantes do nosso País.</p>
						<p>O 19º Concurso Nacional Museu da Imprensa Desenho, Redação e Artigo é uma iniciativa cultural bem-sucedida da Imprensa Nacional que tem por objetivo principal promover a disseminação e a preservação da memória da Imprensa e das artes gráficas no Brasil, por meio do registro da produção intelectual e artística dos (das) estudantes das escolas públicas e privadas de todo o território brasileiro, motivo de grande satisfação para a Imprensa Nacional.</p>
					</Col>
				</Row>
			</Grid>
    </div>
  );
};
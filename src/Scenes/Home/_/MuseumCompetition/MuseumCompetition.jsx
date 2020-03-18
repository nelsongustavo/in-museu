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
				    <h3>O tradicional “Concurso Nacional Museu da Imprensa” incentiva a participação de jovens estudantes de todo o Brasil na promoção e preservação da memória da Imprensa e das artes gráficas em nosso País. Conheça e participe!</h3>
					</Col>
					<Col md={5}>
						<img src="/images/cartaz.jpg" alt="Imprensa Nacional divulga o Regulamento do 19º Concurso Nacional Museu da Imprensa: Desenho, Redação e Artigo como criar blog" />
					</Col>
					<Col md={4}>
						<p>No esforço continuado de cumprir a sua responsabilidade educacional e sociocultural de estimular a reflexão sobre os valores da memória nacional, a Imprensa Nacional realiza periodicamente o Concurso Nacional Museu da Imprensa de Desenho, Redação e Artigo, acreditando no comprometimento e no talento de jovens estudantes do nosso País.</p>

						<p>O Concurso Nacional Museu da Imprensa é uma iniciativa cultural bem-sucedida da Imprensa Nacional que tem por objetivo principal promover a disseminação e a preservação da memória da Imprensa e das artes gráficas no Brasil, por meio do registro da produção intelectual e artística de estudantes das escolas públicas e privadas de todo o território brasileiro, motivo de grande satisfação para a Imprensa Nacional.</p>

						<p>O próximo Concurso (20ª Edição) está previsto para o primeiro semestre de 2020. Fique atento e não perca essa oportunidade!</p>
					</Col>
				</Row>
			</Grid>
    </div>
  );
};
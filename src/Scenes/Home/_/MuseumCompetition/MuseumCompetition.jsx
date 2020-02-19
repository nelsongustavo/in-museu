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
						<p>No esforço continuado de cumprir a sua responsabilidade educacional e sociocultural de estimular a reflexão sobre os valores da memória nacional, a Imprensa Nacional realiza periodicamente o Concurso Nacional Museu da Imprensa de Desenho, Redação e Artigo, acreditando no comprometimento e no talento dos (das) jovens estudantes do nosso País.</p>

						<p>O Concurso Nacional Museu da Imprensa é uma iniciativa cultural bem-sucedida da Imprensa Nacional que tem por objetivo principal promover a disseminação e a preservação da memória da Imprensa e das artes gráficas no Brasil, por meio do registro da produção intelectual e artística dos (das) estudantes das escolas públicas e privadas de todo o território brasileiro, motivo de grande satisfação para a Imprensa Nacional. Conheça abaixo o material da edição do concurso, realizada em 2017/2018:</p>

						<ul>
							<li><a href="http://www.in.gov.br/documents/20181/34771421/ficha_regulamento.pdf/afc96202-4f44-4e4b-bec4-49c0a1d40e33"><span>Regulamento</span></a></li>
							<li><a href="http://www.in.gov.br/documents/20181/34771421/ficha_desenho_fundamental.pdf/b81e5063-f63f-47f9-9877-bcad73338d9c" target="_blank" rel="noopener noreferrer"><span>Ficha Desenho - Ensino Fundamental</span></a></li>
							<li><a href="http://www.in.gov.br/documents/20181/34771421/ficha_redacao_fundamental.pdf/79eb8c85-87d1-4f19-b173-38f2b0af1084" target="_blank" rel="noopener noreferrer"><span>Ficha Redação - Ensino Fundamental</span></a></li>
							<li><a href="http://www.in.gov.br/documents/20181/34771421/ficha_redacao_medio.pdf/1ff25d0a-d17a-4ce8-abc5-0c92b25d310b" target="_blank" rel="noopener noreferrer"><span>Ficha Redação - Ensino Médio</span></a></li>
							<li><a href="http://www.in.gov.br/documents/20181/34771421/cartaz.pdf/15017c60-e43f-4655-893e-2333c2202683" target="_blank" rel="noopener noreferrer"><span>Cartaz - Divulgação</span></a></li>
						</ul>

						<p>O próximo Concurso (20ª Edição) está previsto para o primeiro semestre de 2020. Fique atento e não perca essa oportunidade!</p>
					</Col>
				</Row>
			</Grid>
    </div>
  );
};
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
				    <h3>Os museus estão entre os locais que nos proporcionam a mais elevada ideia do homem, disse o escritor francês André Malraux.</h3>
					</Col>
					<Col md={3}>
						<p>No Museu da Imprensa, plantado nos jardins do Imprensa Nacional, o pensamento de Malraux se ilumina, pois vemos a relação de diálogo entre o homem e a tecnologia. Esta relação bipolar dialoga para produzir suportes à informação impressa. Como resultado, o visitante vê não só o desenvolvimento das artes gráficas, mas seus engenhos de reprodução manuais, elétricos, automáticos, computadorizados e, como resultado, a evolução da imprensa e a memória de homens ilustres que a promoveram.</p>
						<p>Pela tradição de pioneirismos tecnológicos da Imprensa Nacional, o Museu da Imprensa não poderia estar em outro lugar. Em 13 de maio de 2013 completou 31 anos, seduzindo estudantes, professores, jornalistas e turistas. Não é para menos. O Museu da Imprensa é considerado o oitavo mais importante no gênero do mundo. Recebe oito mil visitas a cada ano.</p>
						<p>Em sua área de 680 metros quadrados, encontram-se cerca de 600 peças e documentos raros. Alguns, únicos. Várias peças tem esse caráter.</p>
						<p>É o caso do primeiro clichê feito no Brasil. Dito assim, mostra a importância para o jornalismo. Mas a peça vai além. Trata-se, de fato, do primeiro mapa produzido no Brasil.  Mostra a planta da então cidade de São Sebastião do Rio de Janeiro, que exigiu quatro anos para a sua produção. É uma peça em cobre.</p>
					</Col>
					<Col md={3}>
						<p>Sua execução começou em 1808, por ordem do príncipe regente Dom João, logo após sua chegada ao Brasil. Para o trabalho, ele recrutou os melhor gravador e desenhistas da época.</p>
						<p>Outra valiosa peça é o Prelo Machado de Assis, de origem inglesa e fabricado em 1833. Trata-se de uma máquina de impressão tipográfica para produção de jornais. Uma curiosidade: ela funcionou na Imprensa Nacional até o ano de 1940.</p>
						<p>A fama dessa peça tem razão de ser. É que ela foi o instrumento de trabalho do célebre escritor Machado de Assis que,  simultaneamente aos primeiros passos na literatura, foi servidor da Imprensa Nacional, entre 1856 e 1858. Trabalhou como aprendiz de tipógrafo na impressora. Seu chefe a partir de 1857, foi outro grande nome da literatura brasileira, o escritor Manuel Antônio de Almeida, um dos precursores do realismo e do romance urbano no Brasil.</p>
						<p>Machado de Assis é patrono da Imprensa Nacional, desde 13 de janeiro de 1997. Ele voltaria a trabalhar no órgão em 8 de abril </p>
					</Col>
					<Col md={3}>
						<p>de 1867, na função de assessor do diretor do Diário Oficial, que ocupou até  6 de janeiro de 1874.</p>
						<p>Além das peças famosas, o Museu da Imprensa oferece aos visitantes a oportunidade de conhecer um tórculo (impressora antiga, de fins do século XVIII), rotativas, brasões, florões, mobiliário e documentos. Entre os documentos, há, por exemplo, um exemplar original do Diário Oficial de 14 de maio de 1888, que publicou a Lei nº 3.353, de 13 de maio daquele ano, declarando extinta a escravidão no Brasil.</p>
						<p>Desde 4 de julho de 2001, repousam nos jardins do museu os restos mortais de Hipólito José da Costa, patrono da imprensa brasileira. O jornalista fundou, em Londres, em 1° de junho de 1808, o jornal Correio Braziliense ou Armazém Literário, que circulou até dezembro de 1822.</p>
						<p>Anualmente, essa instituição museológica promove o Concurso Museu da Imprensa de Desenho, Redação, Poesia e Monografia, que já chegou a décima quinta edição. É uma realização da Imprensa Nacional que atrai estudantes de todo o país.</p>
					</Col>
				</Row>
			</Grid>
    </div>
  );
};
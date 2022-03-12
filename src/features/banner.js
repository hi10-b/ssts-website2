import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Banner = () => {
	return (
		<Container>
			<Row>
				<img src={'/bg.png'} alt="Top Banner" />
			</Row>
		</Container>
	);
};

export default Banner;

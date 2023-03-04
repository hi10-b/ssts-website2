import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Banner = () => {
	return (
		<Container
			style={{
				// background: 'rgba(0, 0, 0, 0.1)',
				background: 'linear-gradient(to right, rgba(224, 224, 255, 0), rgba(175, 133, 255, 0.7), rgba(224, 224, 255, 0))',
				marginTop: '10px',
				marginBottom: '10px',
				paddingBottom: '10px',
			}}
		>
			<Row>
				<a href="/">
					<img src={'/bg.png'} alt="Top Banner" style={{ width: '100%' }} />
				</a>
			</Row>
		</Container>
	);
};

export default Banner;

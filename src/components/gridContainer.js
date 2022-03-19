import React from 'react';
import CardBlock from './cardBlock';
import { Col, Row } from 'react-bootstrap';

const GridContainer = ({ title, body, imgPath, footer }) => {
	return (
		<>
			<Col xl={3} md={6} xs={12} className={'mt-4'}>
				<CardBlock title={title} body={body} imgPath={imgPath} footer={footer} />
			</Col>

			<Col l={12} md={12} xl={12} style={{ backgroundColor: 'blue' }}>
				<h1>hello</h1>
			</Col>
		</>
	);
};

export default GridContainer;

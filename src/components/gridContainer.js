import React from 'react';
import CardBlock from './cardBlock';
import { Col } from 'react-bootstrap';

const GridContainer = ({ title, body, imgPath, footer }) => {
	return (
		<Col xl={3} className={'mt-4'}>
			<CardBlock title={title} body={body} imgPath={imgPath} footer={footer} />
		</Col>
	);
};

export default GridContainer;

import React, { useEffect, useState } from 'react';
import CardBlock from './cardBlock';
import { Col, Row } from 'react-bootstrap';
import ReadMore from './readMore';
// import ReadMorePortal from './readMorePortal';

const GridContainer = ({ title, body, imgPath, footer, positions, startDate, description, onclick }) => {
	return (
		<>
			{/* <Col xl={3} md={6} xs={12} className={'d-none d-xl-block'}> */}
			<Col xl={3} md={6} xs={12}>
				{/* <Col md={6} className="d-none d-sm-block"> */}
				<CardBlock title={title} body={body} imgPath={imgPath} footer={footer} onclick={onclick} />
			</Col>
		</>
	);
};

export default GridContainer;

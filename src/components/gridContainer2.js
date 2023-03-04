import React, { useEffect, useMemo, useState } from 'react';
import CardBlock from './cardBlock';
import { Col, Row } from 'react-bootstrap';
import ReadMore from './readMore';
// import ReadMorePortal from './readMorePortal';

const GridContainer2 = ({ title, body, imgPath, footer, positions, startDate, description }) => {
	const moreDetails = { positions, startDate, description };
	return (
		<>
			{/* show on xl screens  */}
			<Col xl={3} md={6} xs={12} className={'d-none d-xl-block'} onClick={() => set}>
				<CardBlock title={title} body={body} imgPath={imgPath} footer={footer} />
			</Col>
			{(positions % 4) - 3 === 0 ? <ReadMore moreDetails={moreDetails} selectedId={positions} /> : <></>}
		</>
	);
};

export default GridContainer2;

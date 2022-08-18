import React, { useEffect, useState } from "react";
import CardBlock from "./cardBlock";
import { Col, Row } from "react-bootstrap";
import ReadMore from "./readMore";
// import ReadMorePortal from './readMorePortal';

const GridContainer = ({ title, body, imgPath, footer, positions, startDate, description }) => {
	const [counter, setCounter] = useState(0);

	const [show, setShow] = useState(false);

	const setX = (cur) => {
		setCounter(cur + 1);
		setShow(false);
	};

	function checkIfShown() {
		counter === 3 ? setShow(true) : setX(counter);
	}

	const [moreDetails, setMoreDetails] = useState({ positions, startDate, imgPath, description });

	const setMoreDetails2 = (positions, startDate, imgPath, description) => {
		setMoreDetails(positions, startDate, imgPath, description);
		return moreDetails;
	};

	useEffect(() => {
		<ReadMore moreDetails={moreDetails} />;
	}, [moreDetails]);

	return (
		<>
			<Col xl={3} md={6} xs={12} className={"d-none d-xl-block"}>
				{/* <Col md={6} className="d-none d-sm-block"> */}
				<CardBlock title={title} body={body} imgPath={imgPath} footer={footer} />
			</Col>

			{/* {checkIfShown()}
			{setShow ? (
				<Col l={12} md={12} xl={12} style={{ backgroundColor: 'blue' }}>
					<h1>hello</h1>
				</Col>
			) : null} */}
			{console.log(title, counter)}
		</>
	);
};

export default GridContainer;

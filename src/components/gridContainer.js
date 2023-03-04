import React, { useEffect, useMemo, useState } from 'react';
import CardBlock from './cardBlock';
import { Col, Row } from 'react-bootstrap';
import ReadMore from './readMore';
// import ReadMorePortal from './readMorePortal';

const GridContainer = ({ title, body, imgPath, footer, positions, startDate, description }) => {
	const [counter, setCounter] = useState(0);

	const [show, setShow] = useState(false);
	const [clicked, setClicked] = useState(false);

	const setX = (cur) => {
		setCounter(cur + 1);
		setShow(false);
	};

	function checkIfShown() {
		counter === 3 ? setShow(true) : setX(counter);
	}

	// const [moreDetails, setMoreDetails] = useState({ positions, startDate, imgPath, description });
	const [moreRef, setMoreRef] = useState();
	const moreDetails = useMemo(() => [positions, startDate, imgPath, description, clicked], [clicked, positions, startDate, imgPath, description]);

	const setMoreDetails2 = (positions, startDate, imgPath, description) => {
		// setMoreDetails(positions, startDate, imgPath, description);
		setMoreRef(positions);
		return moreDetails;
	};

	useEffect(() => {
		return <ReadMore key={positions} moreDetails={moreDetails} />;
	}, [moreDetails, positions]);

	return (
		<>
			{/* <Col xl={3} md={6} xs={12} className={'mt-4'}> */}
			<Col xl={3} md={6} xs={12} className={'d-block d-sm-none'}>
				{/* <Col md={6} className="d-none d-sm-block"> */}

				<h1>xs</h1>
				<CardBlock title={title} body={body} imgPath={imgPath} footer={footer} />
			</Col>
			<Col xl={3} md={6} xs={12} className={'d-none d-sm-block d-md-none'}>
				{/* <Col md={6} className="d-none d-sm-block"> */}

				<h1>sm</h1>
				<CardBlock title={title} body={body} imgPath={imgPath} footer={footer} />
			</Col>
			<Col xl={3} md={6} xs={12} className={'d-none d-md-block d-lg-none'}>
				{/* <Col md={6} className="d-none d-sm-block"> */}

				<h1>md</h1>
				<CardBlock title={title} body={body} imgPath={imgPath} footer={footer} />
			</Col>
			<Col xl={3} md={6} xs={12} className={'d-none d-lg-block d-xl-none'}>
				{/* <Col md={6} className="d-none d-sm-block"> */}

				<h1>lg</h1>
				<CardBlock title={title} body={body} imgPath={imgPath} footer={footer} />
			</Col>
			<Col xl={3} md={6} xs={12} className={'d-none d-xl-block'}>
				{/* <Col md={6} className="d-none d-sm-block"> */}
				<h1>{toString(clicked)}</h1>
				<CardBlock
					title={title}
					body={body}
					imgPath={imgPath}
					footer={footer}
					// onClick={() => setMoreDetails2(positions, startDate, imgPath, description)}
					onClick={() => {
						return setClicked(true);
					}}
				/>
			</Col>

			{!show ? (positions % 4) - 3 === 0 ? <ReadMore moreDetails={moreDetails} /> : <></> : <></>}

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

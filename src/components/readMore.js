import React from 'react';
import { Col } from 'react-bootstrap';

// const ReadMore = ({ positions, startDate, img, description }) => {
const ReadMore = (props) => {
	return (
		<Col style={{ background: 'blue', width: '100%' }} xl={12}>
			{/* <h1>{positions}</h1>
			<h1>{startDate}</h1>
			<h1>{description}</h1> */}
			<h1>{console.log(props.moreDetails.positions)}</h1>
			<h1>{props.moreDetails.positions}</h1>
			<h2>{props.moreDetails.description}</h2>
			<button className="close">x</button>
		</Col>
	);
};

export default ReadMore;

import React from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';

// const ReadMore = ({ positions, startDate, img, description }) => {
const ReadMorePortal = ({ description, isOpen, onClose }) => {
	if (!isOpen)
		return ReactDOM.createPortal(
			<Col style={{ background: 'blue', width: '100%' }} xl={12}>
				{/* <h1>{positions}</h1>
			<h1>{startDate}</h1>
			<h1>{description}</h1> */}
				{/* <h1>{console.log(props.moreDetails.positions)}</h1>
				<h1>{props.moreDetails.positions}</h1> */}
				<h1>{description}</h1>
				<button className="close" onClick={onClose}>
					x
				</button>
			</Col>,
			document.getElementById('portal')
		);
};

export default ReadMorePortal;

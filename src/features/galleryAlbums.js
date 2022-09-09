import React from 'react';
import { Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import CardBlock from '../components/cardBlock';
import GridContainer from '../components/gridContainer';

const GalleryAlbums = (props) => {
	const navigate = useNavigate();
	const goToPage = ({ path }) => {
		navigate(`/allImages`);
		// navigate(`/${path}`);
	};
	return (
		<Row>
			<GridContainer title={'Album name 1'} imgPath="/placeHolder2.png" onclick={goToPage} />

		</Row>
	);
};

export default GalleryAlbums;

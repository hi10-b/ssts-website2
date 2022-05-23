import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardBlock2 from '../components/cardBlock2';
import GalleryAlbums from '../features/galleryAlbums';

const Gallery = () => {
	return (
		<Container>
			<GalleryAlbums />
		</Container>
		// <GalleryAlbums albums={...albums from db}/>
		// <CardBlock2 />
	);
};

export default Gallery;

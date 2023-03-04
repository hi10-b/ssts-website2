import React from 'react';
import { Container } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import { useNavigate } from 'react-router-dom';
import 'react-image-gallery/styles/css/image-gallery.css';

const imagesList = [
	{
		original: '/gm2.png',
		thumbnail: '/gm2.png',
	},
	{
		original: '/gm2.png',
		thumbnail: '/gm2.png',
	},
	{
		original: '/gm2.png',
		thumbnail: '/gm2.png',
	},
];
const AllImages = () => {
	return (
		<Container>
			{/* ------------------------------------------------------------------- */}
			{/* https://www.npmjs.com/package/react-image-gallery */}
			<ImageGallery items={imagesList} showBullets={true} thumbnailPosition={'left'} />
		</Container>
	);
};

export default AllImages;

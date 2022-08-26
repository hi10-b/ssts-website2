import React from 'react';
import { Container } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import { useNavigate } from 'react-router-dom';
import 'react-image-gallery/styles/css/image-gallery.css';

import { imagesList } from './imageList';

const AllImages = () => {
	const navigate = useNavigate();
	const goToPage = ({ path }) => {
		navigate(`/${path}`);
	};
	return (
		<Container>
			<div style={{ height: '60%', position: 'relative' }}>
				{/* ------------------------------------------------------------------- */}
				{/* https://www.npmjs.com/package/react-image-gallery */}
				<ImageGallery
					items={imagesList}
					showBullets={true}
					thumbnailPosition={'bottom'}
					lazyLoad={true}
					useBrowserFullscreen={false}
					showIndex={true}
					disableSwipe={false}
					disableThumbnailScroll={false}
					onErrorImageURL={'/placeHolder.png'}
					indexSeparator={'/'}
				/>
			</div>
		</Container>
	);
};

export default AllImages;

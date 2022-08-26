import React from 'react';

const Footer = ({ children }) => {
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				paddingRight: '10%',
				paddingLeft: '10%',
				backgroundColor: 'blue',
				alignContent: 'center',
				position: 'bottom',
			}}
		>
			<p>Copyright © 2019 Shree Swaminarayan Temple Sydney 1-3 Tasha Pl, Kings Park NSW 2148</p>
		</div>
	);
};

export default Footer;

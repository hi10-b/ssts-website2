import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

// import { setTopGridEvents } from '../Redux/actions/eventsAction';
import GridContainer from '../components/gridContainer';
import { Row, Container } from 'react-bootstrap';
import { ConvertDate } from '../components/convertDate';
import CardBlock from '../components/cardBlock';

// import GridTitle from '../Components/gridTitle';

const TopGrid = ({ events }) => {
	return (
		<Container
			style={{
				background: 'rgba(0, 0, 0, 0.3)',
				marginTop: '10px',
				marginBottom: '10px',
			}}
		>
			{/* <GridTitle title="Events" /> */}
			<Row style={{ padding: '10px' }}>
				
			</Row>
		</Container>
	);
};

export default TopGrid;

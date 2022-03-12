import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

// import { setTopGridEvents } from '../Redux/actions/eventsAction';
import GridContainer from '../components/gridContainer';
import { Row, Container } from 'react-bootstrap';
import { ConvertDate } from '../components/convertDate';

// import GridTitle from '../Components/gridTitle';

const TopGrid = ({ events }) => {
	return (
		<Container
			style={{
				marginTop: '10px',
				marginBottom: '10px',
			}}
		>
			{/* <GridTitle title="Events" /> */}
			<Row style={{ padding: '10px', minHeight: '40vh' }}>
				{events.map((event) => {
					return (
						<GridContainer
							key={event.id}
							title={event.name}
							imgPath={event.image}
							body={event.description}
							footer={ConvertDate(event.startDate)}
						/>
					);
				})}
			</Row>
		</Container>
	);
};

export default TopGrid;
import React, { useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import GridContainer from '../components/gridContainer';
import printEvents from '../components/printEvents';
import { ConvertDate } from '../components/convertDate';

const Events = ({ events }) => {
	// const eventItem = events.map((event) => {
	// 	return (
	// 		<GridContainer key={event.id} title={event.name} imgPath={event.image} body={event.description} footer={ConvertDate(event.startDate)} />
	// 	);
	// });
	const [position, setPosition] = useState(0);

	return (
		<Container
			style={{
				background: 'rgba(0, 0, 0, 0.3)',
				marginTop: '10px',
				marginBottom: '10px',
			}}
		>
			{/* <GridTitle title="Events" /> */}
			<Row style={{ padding: '10px' }} xs={4}>
				{Array.isArray(events) && events.length ? (
					events.map((event, index) => {
						return (
							<GridContainer
								key={event.id}
								title={event.name}
								imgPath={event.image}
								body={event.description}
								startDate={ConvertDate(event.startDate)}
								footer={ConvertDate(event.startDate)}
								description={event.description}
								positions={index}
							/>
						);
					})
				) : (
					<h1>no events</h1>
				)}
			</Row>

			{/* <Row style={{ padding: '10px', minHeight: '40vh' }}>{eventItem}</Row> */}
		</Container>
	);
};

export default Events;

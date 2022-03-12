import React from 'react';
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

	return (
		<Container
			style={{
				background: 'rgba(0, 0, 0, 0.3)',
				marginTop: '10px',
				marginBottom: '10px',
			}}
		>
			{/* <GridTitle title="Events" /> */}
			{/* <Row style={{ padding: '10px', minHeight: '40vh' }}>
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
			</Row> */}
			{/* <Row style={{ padding: '10px', minHeight: '40vh' }}>{eventItem}</Row> */}
			<h1>{typeof events}</h1>
		</Container>
	);
};

export default Events;

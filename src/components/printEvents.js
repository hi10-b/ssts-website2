function printEvents(allEvents) {
	// const allEvents = useSelector((state) => state.eventsreducer);.
	return allEvents.map((cur) => {
		return (
			<h1 key={cur.id}>
				{cur.id} {cur.name}
			</h1>
		);
	});
}
export default printEvents;

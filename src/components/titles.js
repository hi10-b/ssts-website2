import { Row } from 'react-bootstrap';

const Titles = ({ title }) => {
	return (
		<Row style={{ backgroundColor: '#fe9d10', color: 'white' }}>
			<h1 style={{ fontSize: '30px' }}>{title}</h1>
		</Row>
	);
};

export default Titles;

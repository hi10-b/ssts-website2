import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'placeHolder.png' from '../../public';
import './CardStyles.css';
export const CardBlock = ({ title, body, imgPath, footer, onclick, setName, positions }) => {
	const classes = 'fullcard styledCard';
	const navigate = useNavigate();
	const returnEvent = {
		positions: positions,
		title: title,
		img: imgPath,
	};
	return (
		// <Card className={classes} style={{ width: {}, height: '100%' }} onClick={() => navigate('/allImages')}>
		<Card className={classes} style={{ width: '95%', marginBottom: '10%' }} onClick={() => onclick(returnEvent)}>
			{title && <Header header={title} />}
			{/* {body && <Body body={body} />} */}
			{imgPath && <BodyImage2 imgPath={imgPath} />}
			{/* {footer && <Footer footer={footer} />} */}
		</Card>
	);
};

const Header = ({ header }) => {
	return <Card.Header>{header}</Card.Header>;
};

const Body = ({ body }) => {
	return (
		<Card.Body>
			{/* <img src={image} style={{ height: '80%', width: '100%' }}></img> */}
			<Card.Text>{body}</Card.Text>
			{/* <Card.Text>
				<h1>asd</h1>
			</Card.Text> */}
		</Card.Body>
	);
};

const BodyImage2 = ({ imgPath }) => {
	const img = imgPath === '' ? '/placeHolder.png' : imgPath;
	// imgPath == null ? (imgPath = '/placeHolder.png') ;
	return <Card.Img src={img} />;
};

const Footer = ({ footer }) => {
	return (
		<Card.Footer>
			{/* <small className="text-muted">This is footer</small> */}
			<label>{footer}</label>
			<Button variant="primary">Read More</Button>
		</Card.Footer>
	);
};

export default CardBlock;

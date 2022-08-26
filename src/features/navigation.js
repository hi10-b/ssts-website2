import React from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<Container>
			<Navbar variant="dark" expand="lg" style={{ backgroundColor: 'red', position: 'sticky', alignContent: 'center' }}>
				<Container className=".d-none .d-md-block .d-lg-none">
					<Navbar.Brand href="/"></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link style={{ fontWeight: 'bold' }} href="/">
								Home
							</Nav.Link>
							<Nav.Link style={{ fontWeight: 'bold' }} href="/gallery">
								Gallery
							</Nav.Link>
							{/* <Nav.Link style={{ fontWeight: 'bold' }} href="/allImages">
								ImageGallery
							</Nav.Link> */}
							{/* <Nav.Link style={{ fontWeight: 'bold' }} href="/kirtans">
								Kirtans
							</Nav.Link> */}
							<Nav.Link style={{ fontWeight: 'bold' }} href="/acharyas">
								Acharyas
							</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link style={{ fontWeight: 'bold' }} href="/adminLogin">
								Admin
							</Nav.Link>
							{/* <Nav.Link href="/gallery">Gallery</Nav.Link> */}
						</Nav>
					</Navbar.Collapse>
					{/* <Navbar.Collapse className="me-auto"></Navbar.Collapse> */}
				</Container>
				{/* <Container className="d-none d-md-block" expand={false}>
				<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="offcanvasNavbar" />
				<Navbar.Offcanvas expand="lg" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/gallery">Gallery</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/gallery">Gallery</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
				<Navbar.Collapse className="me-auto"></Navbar.Collapse>
			</Container> */}
			</Navbar>
		</Container>
	);
};

export default Navigation;

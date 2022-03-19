import React from 'react';

import { Button, Form, Container } from 'react-bootstrap';
import { ListTable } from '../../components/table';
import { AdminEvents } from '../../features/admin/events';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
	const navigate = useNavigate();
	return (
		<Container>
			<Button
				variant="primary"
				onClick={() => {
					sessionStorage.setItem('curUser', false);
					navigate('/adminLogin');
				}}
			>
				Logout
			</Button>
			<AdminEvents
				tableHead={['Date', 'Name', 'Description', 'Edit', 'Delete']}
				tableBody={[
					['aa', 'ss', 'dd'],
					['cc', 'vv', 'bb'],
				]}
			/>
		</Container>
	);
};

export default Admin;

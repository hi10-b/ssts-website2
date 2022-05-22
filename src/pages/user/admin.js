import React from 'react';

import { Button, Form, Container } from 'react-bootstrap';
import { ListTable } from '../../components/table';
import { AdminEvents } from '../../features/admin/events';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
	const navigate = useNavigate();
	const loggedUser = sessionStorage.getItem('curUser');

	return (
		<Container>
			<Button
				variant="primary"
				onClick={() => {
					sessionStorage.setItem('curUser', false);
					navigate('/adminLogin');
				}}
			>
				{loggedUser == 'true' ? <>Logout</> : <>Login</>}
			</Button>
			{loggedUser == 'true' ? (
				<AdminEvents
					tableHead={['Date', 'Name', 'Description', 'Edit', 'Delete']}
					tableBody={[
						['aa', 'ss', 'dd'],
						['cc', 'vv', 'bb'],
					]}
				/>
			) : (
				<h1>no user logged in</h1>
			)}

			<h1>test logged user val {loggedUser}</h1>
		</Container>
	);
};

export default Admin;

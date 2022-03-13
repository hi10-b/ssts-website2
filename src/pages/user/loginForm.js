import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Form, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { getUser } from '../../redux/actions/userAction';

const tryLogin = (data) => {
	console.log(data.userEmail);

	// return <h1>login</h1>;
};

const LoginForm = () => {
	const [userEmail, setUserEmail] = useState('a');
	const [userPassword, setUserPassword] = useState();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const dispatch = useDispatch();

	const tryLogin = useCallback(
		async (data) => {
			try {
				console.log(data);
				await dispatch(getUser(data.userEmail));
			} catch (err) {
				console.log(err);
			}
		},
		[dispatch]
	);

	useEffect(() => {
		tryLogin();
		console.log('rendered');
	}, [dispatch, tryLogin]);

	return (
		<Container>
			<Form onSubmit={handleSubmit(tryLogin)}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						{...register('userEmail', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })}
					/>
					<Form.Text className="text-muted">{errors.userEmail?.type === 'required' && '*Enter Email'}</Form.Text>
					<Form.Text className="text-muted">{errors.userEmail?.type === 'pattern' && '*Enter Valid Email'}</Form.Text>
					{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" {...register('userPassword', { required: true })} />
					<Form.Text className="text-muted">{errors.userPassword?.type === 'required' && '*Enter Password'}</Form.Text>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default LoginForm;

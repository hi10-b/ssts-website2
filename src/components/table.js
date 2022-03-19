import { Button, Table } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const ListTable = ({ tableHead, tableBody }) => {
	return (
		<Table striped hover responsive variant="light" style={{ alignItems: 'center' }}>
			<thead>
				<tr>
					{tableHead &&
						tableHead.map((title) => {
							return <th>{title}</th>;
						})}
					{/* <th>Edit</th>
					<th>Delete</th> */}
				</tr>
			</thead>
			<tbody>
				{tableBody &&
					tableBody.map((item) => {
						return (
							<tr>
								{item.map((rowItem) => {
									return <td>{rowItem}</td>;
								})}
								<td>
									<Button variant="primary">Edit</Button>
								</td>
								<td>
									<Button variant="primary">Del</Button>
								</td>
							</tr>
						);
					})}
			</tbody>
		</Table>
	);
};

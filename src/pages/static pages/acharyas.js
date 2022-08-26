import { Paper, Toolbar } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Acharyas = () => {
	return (
		<>
			<Container>
				<Paper elevation={5} style={{ margin: 20, padding: 25, background: 'rgba(0, 0, 0, 0.2)' }}>
					<div>
						<h1>Acharyas</h1>
						<h3>History of our Acharyas</h3>
						<p>
							Swaminarayan Sampraday Guru Parampara is said to have started from Shree Ramanuj Archarya and his successor was Sadguru
							Shree Ramanand Swami and he gave diksha and appointed Shree Sahajanand Swami (Shree Swaminarayan Bhagwan) as his
							successor. One of the purposes of Shree Swamianarayan Bhagwan’s life was to continue and preserve the virtues of the
							Dharma, Bhakti, Gnan and Vairagya that He established, after He had gone to Akshardham. So after discussions with the
							leading Saints at the time he established the Acharyaship of Swaminarayan Sampraday on Kartak Sud Ekadashi (Prabodhini
							Ekadashi)1882 (Tuesday 21-11-1825) in Vadtal.
						</p>
						<p>
							He adopted and appointed his elder brother Rampratapbhai’s third son Ayodhya Prasadji as the Acharya of Narnarayan Desh
							(Northern Division) and his younger brother Ichharambhai’s second son Raghuvir Prasadji as the Acharya of Laxminarayan
							Desh (Southern Division). Ahmedabad was the HQ of Narnarayan Dev Gadi and Vadtal for Laxminarayan Dev Gadi. Swaminarayan
							Bhagwan announced that only these two Acharyas (and their Successor) are to install murtis in the His Temples and to give
							diksha to the disciples in their respective divisions. He promised that he will reside in the Murtis installed by the
							Acharyas. No one else, regardless of his/her high religious or spiritual status, is authorised to install the Murtis and
							give Diksha to disciples of Swaminarayan Sampraday.
						</p>
						<p>
							The two Acharyas are authorized to initiate the male disciples and their wives with the consent of their husbands are to
							initiate the female disciples. The jurisdiction of the management of the Divisions and the roles of the Acharyas are
							stipulated in Desh Vibhag Lekh, which was dictated by Shreeji Maharaj Himself to Swami Sukhanand and handed to the two
							Acharyas on the Magsar Sud Poonam 1883 (1827 AD).
						</p>

						<Paper elevation={5} style={{ margin: 10 }}>
							<TableContainer>
								<Toolbar>
									<h4>Shree Nar Narayan Dev Gadi</h4>
								</Toolbar>
								<Table sx={{ minWidth: '50%', width: '50%' }} aria-label="simple table">
									<TableBody>
										<TableCell>• Acharya Shree Ayodhyaprasadji Maharaj</TableCell>
										<TableCell>• Acharya Shree Keshavprasadji Maharaj</TableCell>
										<TableCell>• Acharya Shree Purshottamprasadji Maharaj</TableCell>
										<TableCell>• Acharya Shree Vasudevprasadji Maharaj</TableCell>
										<TableCell>• Acharya Shree Devendraprasadji Maharaj</TableCell>
										<TableCell>• Acharya Shree Tejendraprasadji Maharaj</TableCell>
										<TableCell>• Acharya Shree KoshalendraPrasadjiMaharaj</TableCell>
									</TableBody>
								</Table>
							</TableContainer>
						</Paper>
						<Paper elevation={5} style={{ margin: 10 }}>
							<TableContainer>
								<Toolbar>
									<h4>Shree Laxmi Narayan Dev Gadi</h4>
								</Toolbar>
								<Table sx={{ minWidth: '50%', width: '50%' }} aria-label="simple table">
									<TableBody>
										<TableCell>• Acharya Shree Raghuvirji Maharaj</TableCell>
										<TableCell>• Acharya Shree Bhagvatprasadji Maharaj</TableCell>
										<TableCell>•Acharya Shree Viharilalji Maharaj</TableCell>
										<TableCell>• Acharya Shree Laxmiprasadji Maharaj</TableCell>
										<TableCell>• Acharya Shree Shripatiprasadji Maharaj</TableCell>
										<TableCell>• Acharya Shree Anandprasadji Maharaj</TableCell>
										<TableCell>• Acharya Shree Narendraprasadji Maharaj</TableCell>
										<TableCell>• Acharya Shree Ajendraprasadji Maharaj</TableCell>
										<TableCell>•Acharya Shree Rakesh Prashadji Maharaj</TableCell>
									</TableBody>
								</Table>
							</TableContainer>
						</Paper>
					</div>
					<h4>
						<a href={'https://www.swaminarayan.faith/articles/guru-parampara'}>For more information on our Guru Parampara click here</a>
					</h4>
				</Paper>
			</Container>
		</>
	);
};

export default Acharyas;

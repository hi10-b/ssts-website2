import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Events from './events';

import { Container } from 'react-bootstrap';

const drawerWidth = 500;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginRight: -drawerWidth,
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: -400,
	}),
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: drawerWidth,
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-start',
}));

const Events2 = ({ events }) => {
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [eventName, setEventName] = useState('');
	const [curPosition, setCurPosition] = useState();
	const [curImg, setCurImg] = useState();
	const handleDrawerOpen = (returnEvent) => {
		if (curPosition == returnEvent.positions) {
			setOpen(false);
			setCurPosition();
		} else {
			setOpen(true);
			setEventName(returnEvent.title);
			setCurPosition(returnEvent.positions);
			setCurImg(returnEvent.img);
		}
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Container>
			<Box sx={{ display: 'flex' }}>
				<Main open={open}>
					<Events events={events} onclick={(returnEvent) => handleDrawerOpen(returnEvent)} />
				</Main>
				<Drawer
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						'& .MuiDrawer-paper': {
							width: '30%',
						},
						display: { xs: 'none', md: 'block' },
					}}
					variant="persistent"
					anchor="right"
					open={open}
				>
					<DrawerHeader>
						<IconButton onClick={handleDrawerClose}>{theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
						<div>
							<h1>Clicked Event</h1>
						</div>
					</DrawerHeader>
					<Divider />
					<Container>
						<h1>{curImg}</h1>
						<img
							src={curImg}
							alt={eventName}
							style={{
								width: '60%',
								alignSelf: 'center',
								position: 'relative',
							}}
						/>
						<h1>{eventName}</h1>
						<h1>{curPosition}</h1>
					</Container>
				</Drawer>
			</Box>
		</Container>
	);
};

export default Events2;

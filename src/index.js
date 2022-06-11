import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { CSSReset, ThemeProvider } from '@chakra-ui/core';
// import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
	// <ChakraProvider>
	<Provider store={store}>
		<App />
	</Provider>,
	// </ChakraProvider>,

	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

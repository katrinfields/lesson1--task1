//декларативный  стиль
import React from 'react';
import logo from './logo.svg';
import './App.css';

export const App = () => {
	//сама анонимная функция  - императивный стиль, но вычисление даты - декларативный, возвращенные теги в виде верстки- декларативный

	let currentYear = new Date().getFullYear();

	// return (
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<img src={logo} className="App-logo" alt="logo" />
	// 			<p>
	// 				Edit <code>src/App.js</code> and save to reload.
	// 			</p>
	// 			<a
	// 				className="App-link"
	// 				href="https://reactjs.org"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				Learn React
	// 			</a>
	// 			<p>{currentYear}</p>
	// 		</header>
	// 	</div>
	// );
	// императивный стиль
	return React.createElement(
		'div',
		{ className: 'App' },
		React.createElement(
			'header',
			{ className: 'App-header' },
			React.createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			React.createElement(
				'p',
				null,
				'Edit',
				React.createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: 'blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			React.createElement('p', null, currentYear),
		),
	);
};

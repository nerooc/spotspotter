import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import { msalConfig } from './azure/authConfig';
import { PrivateRoute } from './components';
import { CoordinatesProvider } from './containers';
import { Layout } from './layouts';
import CreateLocationPage from './pages/create';
import Home from './pages/home';
import LocationPage from './pages/location';
import Login from './pages/login';

const GlobalStyles = createGlobalStyle`

	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Outfit', sans-serif !important;
	}

  body {
    height: 100%;
  }

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (prefers-color-scheme: dark) {
		html {
			color-scheme: dark;
		}
		body {
			color: white;
			background: black;
		}
	}
`;

function App() {
	const instance = new PublicClientApplication(msalConfig);

	return (
		// <ProtectedRoute router={router}>
		<MsalProvider instance={instance}>
			<CoordinatesProvider>
				<GlobalStyles />
				<BrowserRouter>
					<Layout>
						<Switch>
							<Redirect exact from="/" to="/login" />
							<Route path="/login">
								<Login />
							</Route>

							{/*	@ts-ignore */}
							<PrivateRoute exact path="/app">
								<Home />
							</PrivateRoute>
							<PrivateRoute path="/app/location/:id">
								<LocationPage />
							</PrivateRoute>
							<PrivateRoute path="/app/create">
								<CreateLocationPage />
							</PrivateRoute>
						</Switch>
					</Layout>
				</BrowserRouter>
			</CoordinatesProvider>
		</MsalProvider>
		// </ProtectedRoute>
	);
}

export default App;

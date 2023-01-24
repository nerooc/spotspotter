import { useIsAuthenticated } from '@azure/msal-react';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PrivateRouteProps {
	children: React.ReactNode;
	path: string;
	exact?: boolean;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {
	const isAuthenticated = useIsAuthenticated();

	return <Route {...rest}>{isAuthenticated === true ? children : <Redirect to="/login" />} </Route>;
};

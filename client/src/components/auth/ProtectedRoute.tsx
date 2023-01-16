import { appRoutes } from '@/constants';
import { useIsAuthenticated } from '@azure/msal-react';
import { useEffect } from 'react';

const isBrowser = () => typeof window !== 'undefined';

interface ProtectedRouteProps {
	router: any;
	children: any;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ router, children }) => {
	//Identify authenticated user
	const isAuthenticated = useIsAuthenticated();
	let unprotectedRoutes = [appRoutes.LOGIN_PAGE, appRoutes.REGISTER_PAGE, appRoutes.CONTACT_PAGE];
	let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

	useEffect(() => {
		if (isBrowser() && !isAuthenticated && pathIsProtected) {
			router.push(appRoutes.LOGIN_PAGE);
		}
	}, [isAuthenticated]);

	return children;
};

import React from 'react';
import { AuthLayout, AppLayout } from '../layouts';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { pathname } = useLocation();
	const isApp = pathname.includes('/app');
	const isAuth = pathname.includes('/login') || pathname.includes('/register');

	return (
		<>
			{isAuth ? (
				<AuthLayout>{children}</AuthLayout>
			) : isApp ? (
				<AppLayout>{children}</AppLayout>
			) : (
				(children as React.ReactNode)
			)}
		</>
	);
};

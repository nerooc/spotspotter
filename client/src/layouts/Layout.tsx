import React from 'react';
import { useRouter } from 'next/router';
import { AuthLayout, AppLayout } from '@/layouts';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { pathname } = useRouter();
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

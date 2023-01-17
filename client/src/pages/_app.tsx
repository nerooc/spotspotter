import { msalConfig } from '@/azure/authConfig';
import { ProtectedRoute } from '@/components/auth';
import { CoordinatesProvider } from '@/containers';
import { Layout } from '@/layouts';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components';

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

export default function MyApp({ Component, pageProps }: AppProps) {
	const instance = new PublicClientApplication(msalConfig);
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Spotspotter</title>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<ProtectedRoute router={router}>
				<MsalProvider instance={instance}>
					<CoordinatesProvider>
						<GlobalStyles />
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</CoordinatesProvider>
				</MsalProvider>
			</ProtectedRoute>
		</>
	);
}

import { msalConfig } from '@/azure/authConfig';
import { ProtectedRoute } from '@/components/auth';
import { CoordinatesProvider } from '@/containers';
import { Layout } from '@/layouts';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&display=swap');

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

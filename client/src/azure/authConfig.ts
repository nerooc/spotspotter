export const msalConfig = {
	auth: {
		clientId: '2da24bb6-f7f1-4919-abc2-6f42fb83f0d9',
		authority: 'https://login.microsoftonline.com/common',
		redirectUri: '/login',
	},
	cache: {
		cacheLocation: 'sessionStorage',
		storeAuthStateInCookie: false,
	},
};

export const loginRequest = {
	scopes: ['User.Read'],
};

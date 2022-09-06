module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		//'prettier/prettier': ['error', { endOfLine: 'auto' }]
	}
};

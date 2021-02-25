const path = require('path');
const { ESLINT_MODES } = require("@craco/craco");

module.exports = {
	eslint: {
		mode: ESLINT_MODES.extends,
		configure: () => {
			// Workaround for broken ESLINT_MODES.file mode
			return require('./.eslintrc')
		}
	},
    webpack: {
        alias: {
			'polyfills': path.resolve(__dirname, './src/polyfills'),
            'components': path.resolve(__dirname, './src/components'),
			'containers': path.resolve(__dirname, './src/containers'),
			'redux/actions': path.resolve(__dirname, './src/actions'),
			'redux/reducers': path.resolve(__dirname, './src/reducers'),
			'router': path.resolve(__dirname, './src/router'),
        }
    }
}
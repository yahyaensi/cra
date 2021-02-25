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
            'components': path.join(path.resolve(__dirname, './src/components')),
			'containers': path.join(path.resolve(__dirname, './src/containers')),
			'redux/actions': path.join(path.resolve(__dirname, './src/actions')),
			'redux/reducers': path.join(path.resolve(__dirname, './src/reducers')),
			'router': path.join(path.resolve(__dirname, './src/router')),
        }
    }
}
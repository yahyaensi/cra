const path = require('path');

module.exports = {
		"env": {
			"browser": true,
			"es6": true,
			"jest": true
		},
		"parser": "babel-eslint",
		"settings": {
			"import/resolver": {
				"node": {
					"paths": [
						"src"
					]
				}
			}
		},
		"extends": [
			"plugin:react/recommended",
			"airbnb",
			"airbnb/hooks",
			"prettier",
			"prettier/react",
			"plugin:prettier/recommended"
		],
		"parserOptions": {
			"ecmaFeatures": {
				"jsx": true
			},
			"ecmaVersion": 2018,
			"sourceType": "module"
		},
		"plugins": [
			"react",
			"prettier"
		],
		"rules": {
			"prettier/prettier": "error",
		}
}

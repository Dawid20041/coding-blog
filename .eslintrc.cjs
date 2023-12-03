/** @type { import("eslint").Linter.FlatConfig } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ["@typescript-eslint", "unicorn", "sonarjs"],
	extends: ["plugin:@typescript-eslint/recommended", "plugin:unicorn/recommended", "plugin:sonarjs/recommended"],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	rules: {
		"unicorn/no-useless-undefined": "off",
		"unicorn/no-null": "off",
		"@typescript-eslint/no-unsafe-call": "warn",
		"@typescript-eslint/no-misused-promises": [2, {
			"checksVoidReturn": {
				"attributes": false
			}
		}],
		"unicorn/prevent-abbreviations": [
			"error",
			{
				"replacements": {
					"props": false,
					"ref": false
				}
			}
		],
		"unicorn/no-keyword-prefix": "off",
		"unicorn/no-array-for-each": "off",
		"unicorn/better-regex": "error",
		'max-lines-per-function': [
			'error',
			{
				max: 30,
				skipBlankLines: true,
				skipComments: true,
				IIFEs: true,
			}],
		"@typescript-eslint/consistent-type-imports": [
			"warn",
			{
				prefer: "type-imports",
				fixStyle: "inline-type-imports",
			},
		],
		"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
	},
};

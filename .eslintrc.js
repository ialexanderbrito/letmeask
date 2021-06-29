module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:prettier/recommended",
        "prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        camelcase: 'off',
        semi: 'off',
        eqeqeq: 'off',
        "@typescript-eslint/indent": ["error", 2],
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'implicit-arrow-linebreak': 'off',
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
        'arrow-body-style': ['error', 'as-needed'],
        'class-methods-use-this': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/prop-types': 'off',
        'react/no-array-index-key': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-shadow': 'off',
        'no-console': 'error',
        'no-plusplus': 'off',
        'no-lone-blocks': 'off',
        'no-unused-vars': 'error',
        'no-nested-ternary': 'error',
        'no-param-reassign': 'error',
        'no-use-before-define': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-expressions': 'off',
        'no-unneeded-ternary': 'error',
        'no-useless-constructor': 'off',
        'react/forbid-prop-types': 'off',
        'react/require-default-props': 'off',
        'react/destructuring-assignment': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/heading-has-content': 'off',
        'jsx-a11y/alt-text': 'off',
        'react/jsx-key': 'off',
        'consistent-return': 'off',
        'react/no-unescaped-entities': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'prefer-promise-reject-errors': 'off',
        radix: 'off',
        'react/display-name': 'off',
        'func-names': 'off'
    },
    settings: {
        'import/extensions': ['.ts', '.tsx'],
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
                                               // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
                                 // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                                 // default to latest and warns if missing
                                 // It will default to "detect" in the future
            "flowVersion": "0.53" // Flow version
          },
      },
};
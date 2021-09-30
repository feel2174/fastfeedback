module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: 'babel-eslint',
    extends: [
        'plugin:prettier/recommended',
        'plugin:react/recommended',
    ],
    plugins: ['react', 'prettier'],
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-uses-vars': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        "no-multiple-empty-lines": 'error',
        'react/display-name': 'off',
        'react/no-children-prop': 'off',
    },
    ignorePatterns: [
        'node_modules',
        'coverage',
        'build',
        'dist',
        '.*',
        '*.config.{js,ts}',
    ],
};

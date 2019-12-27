// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/standard'],
    rules: {
        // indent: 'off',
        'no-console': 'off',
        // indent: ['error', 4],
        indent: ['error', 4, { SwitchCase: 1 }],
        'space-before-function-paren': 0,
        // 'no-console': process.env.NODE_ENV ===
        // 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}

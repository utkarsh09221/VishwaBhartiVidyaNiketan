[
    {
        languageOptions: {
            globals: {
                browser: true,
                es2021: true,
            },
        },
        files: ['*.jsx', '*.js'],
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: 12,
            sourceType: 'module',
        },
        plugins: ['react'],
        rules: {
            // React specific rules can be added here
        },
    },
    {
        rules: {
            // Add any custom rules here
        },
    },
];

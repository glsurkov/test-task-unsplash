import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import reacteslint from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import path from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const PROJECT_STRUCTURE = {
    app: 1,
    pages: {
        '**': 1,
    },
    layouts: {
        '**': 1,
    },
    entities: {
        '**': 1,
    },
    shared: {
        api: 1,
        assets: 1,
        routing: 1,
        config: {
            '**': 1,
        },
        consts: {
            '**': 1,
        },
        lib: {
            '**': 1,
        },
        redux: 1,
        viewer: 1,
        ui: {
            '**': 1,
        },
    },
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    resolvePluginsRelativeTo: __dirname,
});

export default tseslint.config(
    { ignores: ['dist', 'src/shared/api/rest/**'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            reacteslint.configs.flat.recommended,
            ...compat.config({
                globals: {
                    Any: 'readonly',
                },
                plugins: ['kisszaya-fsd-plugin'],
                rules: {
                    'kisszaya-fsd-plugin/fsd-relative-path': [
                        'error',
                        {
                            alias: '@/',
                            projectStructure: PROJECT_STRUCTURE,
                        },
                    ],
                    'kisszaya-fsd-plugin/absolute-public-api-imports': [
                        'error',
                        {
                            alias: '@/',
                            projectStructure: PROJECT_STRUCTURE,
                        },
                    ],
                    'kisszaya-fsd-plugin/layer-imports': [
                        'error',
                        {
                            alias: '@/',
                            projectStructure: PROJECT_STRUCTURE,
                        },
                    ],
                    'storybook/hierarchy-separator': 'off',
                    'storybook/default-exports': 'off',
                    'storybook/story-exports': 'off',
                },
                overrides: [
                    {
                        files: ['src/shared/config/i18n/i18n-json.ts'],
                        rules: {
                            'kisszaya-fsd-plugin/fsd-relative-path': 'off',
                            'kisszaya-fsd-plugin/absolute-public-api-imports': 'off',
                            'kisszaya-fsd-plugin/layer-imports': 'off',
                        },
                    },
                ],
            }),
        ],
        files: ['**/*.{ts,tsx}'],
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'ignore' }],
            '@typescript-eslint/no-explicit-any': 'error',
            'react/display-name': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            'react/prop-types': 0,
            'max-lines': [
                'warn',
                {
                    max: 1500,
                    skipBlankLines: false,
                    skipComments: false,
                },
            ],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        files: ['src/shared/**/*.{ts,tsx}'],
        rules: {
            '@typescript-eslint/no-empty-object-type': 'off',
        },
    },
);

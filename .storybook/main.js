module.exports = {
    stories: ['../src/**/*.stories.[tj]sx'],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
                },
            ],
        })
        config.resolve.extensions.push('.ts', '.tsx')
        return config
    },
    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-backgrounds/register',
    ],
}

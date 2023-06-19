const path = require("path");

module.exports = {
    stories: ['../src/**/**/*.stories.@(js|md|tsx)'],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-addon-mock"
    ],
    framework: "@storybook/react",
    core: {
        builder: {
            name: "webpack5",
            options: {
                fsCache: true,
            }
        }
    },

    // for SASS loading. Needs sass-loader v8 because of old webpack with storybook 6
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader?url=false', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });

        config.resolve = {
            extensions: ['.ts', '.js', '.jsx', '.tsx', '.css', '.scss', '...'],
        }

        return config;
    },


}
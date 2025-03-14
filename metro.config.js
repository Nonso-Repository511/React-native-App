/**
 * Metro configuration for React Native
 * https://github.com/facebook/metro
 *
 * @format
 */

module.exports = {
    transformer: {
      babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
    },
    resolver: {
      sourceExts: ['jsx', 'js', 'ts', 'tsx'], // Add support for TypeScript if needed
    },
  };
  const { getDefaultConfig } = require('@react-native/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = config;

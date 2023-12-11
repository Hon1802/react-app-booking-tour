const { override, addWebpackPlugin } = require('customize-cra');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = override(
    (config) => {
        if (config.devServer) {
          config.devServer.allowedHosts = ['https://web-service-booking-tour.onrender.com'];
        }
        return config;
      }
);

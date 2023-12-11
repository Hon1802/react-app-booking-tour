import{ override, addWebpackPlugin } from 'customize-cra';
import CompressionPlugin from 'compression-webpack-plugin';

module.exports = override(
  // Thêm plugin nén vào config của webpack
  addWebpackPlugin(new CompressionPlugin())
);

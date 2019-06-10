const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const config = require('./webpack.config.js');

const compiler = webpack(config);
const app = express();

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');

// 告诉 express 使用 webpack-dev-middleware
// 以及将 webpack.config.js 配置文件作为基础配置
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: { colors: true },
}));

// 熱模塊
app.use(webpackHotMiddleware(compiler));

app.get('/home', (req, res) => {
  res.render('./views/a.hbs', { title: 'abc' });
});

// 将文件 serve 到 port 3000。
app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n'); // eslint-disable-line
});

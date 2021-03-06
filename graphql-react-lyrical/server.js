const app = require('./server/app');

const PORT = 4000

// Webpack runs as a middleware.  If any request comes in for the root route ('/')
// Webpack will respond with the output of the webpack process: an HTML file and
// a single bundle.js output of all of our client side Javascript
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const history = require('connect-history-api-fallback');
app.use(history());

app.use(webpackMiddleware(webpack(webpackConfig)));


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

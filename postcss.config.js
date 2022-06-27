const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [autoprefixer, cssnano({preset: "default"})]
}

//autoprefix adds to css for other browsers
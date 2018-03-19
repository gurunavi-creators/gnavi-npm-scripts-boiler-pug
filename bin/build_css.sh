#!/bin/sh

stylelint --config conf/stylelintrc.js src/scss/*.scss && node-sass --output-style compressed src/scss/style.scss -o tmp/css/ && postcss tmp/css/* --use autoprefixer css-mqpacker -d dist/css/ --no-map

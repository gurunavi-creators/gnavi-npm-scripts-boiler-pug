#!/bin/sh

eslint --config conf/eslintrc.js src/js/* && webpack --config conf/webpack.js -p

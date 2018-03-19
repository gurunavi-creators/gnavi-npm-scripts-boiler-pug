#!/bin/sh

# 必要なければspriteは削除する
npm run clean &&  npm-run-all -p build:*
# npm run clean && npm run sprite && npm-run-all -p build:*

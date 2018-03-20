# npm-boiler-pug-babel-sass

- npm-boiler-pug-babel-sassリポジトリ


# package

## package installed

- [package.jsonを参照](package.json)


# config

## install

### install

    npm i


### build

    npm run build

## watch command

    npm run watch

## sprite command

    npm run sprite

## clean dist/、tmp/ command

    npm run clean


# ルートディレクトリ構成

    bin/ : ビルド・デプロイシェル
    conf. : 設定ファイル
    dist/ : 出力ディレクトリ
    src/ : 開発ディレクトリ
    tmp/ : 中間生成物一時保管ディレクトリ
    .editorconfig
    .gitignore
    package.json
    README.md


# 開発ディレクトリ構成

編集対象は src/ 以下のみ

    src/
      └ pug/
        └ data/ : data
        └ include/ : parts
        └ layout/ : layout
        └ page/ : page
      └ img/ : 画像
      └ sprite/ : スプライト用画像
      └ js/
        └ common.js
        └ _module.js
      └ scss/
        └ style.scss
        └ _module.scss


# CSS開発方針

## 設計方針

- [設計方針](設計方針)

## セレクター命名方針

- [MindBEMding](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

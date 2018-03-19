module.exports = {
  extends: ['eslint-config-gnavi'],
  parser: 'babel-eslint',
  env: {
    // 使用環境設定
    browser: true,
  },
  globals: {
    // global変数許可設定
    gNaviGlobalState: true,
    google: true,
  },
  rules: {
    // use strictを許可
    'strict': 0,
    // console メソッドを警告
    'no-console': 1
  },
};

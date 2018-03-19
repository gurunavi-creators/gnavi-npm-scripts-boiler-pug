module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["if", "else", "mixin", "content", "include", "for"]
    }],
    "property-no-unknown": [true, {
      "checkPrefixed": true
    }],
    "no-duplicate-selectors": null,
    "selector-list-comma-newline-after": null,
    "rule-empty-line-before": ["always", {"ignore": ["after-comment", "inside-block"]}],
    "length-zero-no-unit": null,
    "declaration-empty-line-before": null
  }
};

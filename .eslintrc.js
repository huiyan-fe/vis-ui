module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "babel"
    ],
    "rules": {
        "radix": "off",
        "react/no-deprecated": "off",
        "one-var": "off",
        "no-empty-pattern": "error",
        "one-var-declaration-per-line": "error",
        "react/jsx-curly-spacing": "off",
        "wrap-iife": "off",
        "react/jsx-filename-extension": "off",
        "no-ternary": "off",
        "react/require-optimization": "off",
        "react/no-string-refs": "off",
        "lines-around-comment": "off",
        "no-extra-label": "error",
        "block-scoped-var": "warn",
        "init-declarations": "warn",
        "linebreak-style": ["off", "unix"],
        "semi-spacing": "off",
        "no-multi-str": "off",
        "comma-spacing": "off",
        "eol-last": ["warn", "always"],
        "no-octal": "off",
        "curly": "off",
        "no-var": "off",
        "no-undefined": "off",
        "react/jsx-no-comment-textnodes": "off",
        "no-unused-expressions": ["warn", {
            "allowShortCircuit": true
        }],
        "no-new-symbol": "error",
        "no-array-constructor": "off",
        "arrow-spacing": "off",
        "no-useless-rename": "error",
        "no-implied-eval": "off",
        "no-iterator": "off",
        "no-process-exit": "off",
        "react/sort-prop-types": "off",
        "react/no-unused-prop-types": "off",
        "space-infix-ops": "off",
        "array-bracket-newline": ["warn", {
            "multiline": true
        }],
        "no-regex-spaces": "warn",
        "no-implicit-globals": "off",
        "no-new-func": "warn",
        "array-bracket-spacing": "off",
        "comma-dangle": "off",
        "react/no-unknown-property": "off",
        "max-depth": "off",
        "no-warning-comments": "off",
        "react/jsx-indent-props": "off",
        "spaced-comment": "off",
        "no-param-reassign": ["warn", {
            "props": true
        }],
        "callback-return": "off",
        "no-proto": "off",
        "no-template-curly-in-string": "off",
        "react/jsx-no-target-blank": "off",
        "no-useless-escape": "error",
        "prefer-destructuring": "off",
        "no-plusplus": "off",
        "react/jsx-key": "off",
        "no-self-assign": "error",
        "id-blacklist": "off",
        "semi": "off",
        "quotes": "off",
        "react/display-name": "off",
        "no-bitwise": "off",
        "prefer-template": "off",
        "no-invalid-this": "off",
        "func-style": "off",
        "react/no-unescaped-entities": "off",
        "react/jsx-pascal-case": "off",
        "no-empty": "error",
        "key-spacing": "off",
        "no-func-assign": "off",
        "no-unused-vars": "off",
        "no-mixed-operators": "off",
        "capitalized-comments": "off",
        "object-shorthand": ["off", "consistent-as-needed"],
        "no-dupe-args": "off",
        "no-buffer-constructor": "warn",
        "arrow-parens": "off",
        "computed-property-spacing": "off",
        "object-curly-newline": ["off", {
            "consistent": true,
            "multiline": true
        }],
        "jsx-quotes": ["error", "prefer-double"],
        "max-params": "off",
        "arrow-body-style": "off",
        "rest-spread-spacing": ["error", "never"],
        "no-else-return": "off",
        "no-useless-constructor": "off",
        "no-redeclare": "off",
        "no-constant-condition": "off",
        "react/jsx-boolean-value": "off",
        "global-require": "warn",
        "comma-style": "off",
        "line-comment-position": "off",
        "no-tabs": "off",
        "block-spacing": ["error", "never"],
        "no-dupe-keys": "off",
        "no-caller": "error",
        "no-new-object": "off",
        "no-negated-condition": "warn",
        "no-unmodified-loop-condition": "warn",
        "no-multi-spaces": "off",
        "keyword-spacing": "off",
        "space-in-parens": "off",
        "template-curly-spacing": ["error", "never"],
        "space-unary-ops": "off",
        "react/void-dom-elements-no-children": "off",
        "require-yield": "warn",
        "no-inline-comments": "off",
        "symbol-description": "warn",
        "object-curly-spacing": "off",
        "no-implicit-coercion": "off",
        "no-whitespace-before-property": "warn",
        "react/no-is-mounted": "off",
        "no-fallthrough": "error",
        "react/prefer-es6-class": "off",
        "react/no-will-update-set-state": "off",
        "no-irregular-whitespace": "off",
        "no-global-assign": "error",
        "no-new-require": "warn",
        "no-mixed-requires": "off",
        "no-return-assign": ["error", "except-parens"],
        "react/jsx-closing-bracket-location": "off",
        "react/jsx-first-prop-new-line": "off",
        "no-unreachable": "off",
        "no-console": "off",
        "nonblock-statement-body-position": "off",
        "no-alert": "warn",
        "prefer-const": "off",
        "no-cond-assign": "error",
        "prefer-spread": "warn",
        "object-property-newline": "off",
        "newline-per-chained-call": "off",
        "prefer-rest-params": "off",
        "no-const-assign": "off",
        "brace-style": "off",
        "max-statements": ["warn", 30, {
            "ignoreTopLevelFunctions": true
        }],
        "babel/object-curly-spacing": "off",
        "no-useless-call": "warn",
        "handle-callback-err": "off",
        "no-useless-concat": "warn",
        "react/jsx-wrap-multilines": "off",
        "react/jsx-indent": "off",
        "react/forbid-foreign-prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "max-lines": ["warn", 800],
        "no-octal-escape": "off",
        "no-shadow": "off",
        "react/jsx-uses-vars": "off",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-self-compare": "off",
        "sort-vars": "off",
        "space-before-function-paren": "off",
        "use-isnan": "off",
        "no-confusing-arrow": "off",
        "no-restricted-properties": "off",
        "default-case": "off",
        "no-restricted-modules": "off",
        "no-delete-var": "off",
        "no-lone-blocks": "off",
        "no-eq-null": "off",
        "no-shadow-restricted-names": "off",
        "no-extend-native": "off",
        "react/sort-comp": "off",
        "sort-keys": "off",
        "react/style-prop-object": "off",
        "no-case-declarations": "error",
        "react/no-did-mount-set-state": "off",
        "react/jsx-no-bind": "off",
        "no-duplicate-case": "off",
        "operator-assignment": "off",
        "no-magic-numbers": "off",
        "react/no-danger-with-children": "off",
        "no-eval": "off",
        "no-extra-semi": "error",
        "no-nested-ternary": "off",
        "react/no-multi-comp": "off",
        "camelcase": "off",
        "no-restricted-syntax": "off",
        "no-extra-boolean-cast": "off",
        "no-empty-function": "warn",
        "react/jsx-no-undef": "off",
        "valid-jsdoc": "off",
        "array-callback-return": "error",
        "template-tag-spacing": ["error", "never"],
        "unicode-bom": "off",
        "react/prefer-stateless-function": "off",
        "react/no-danger": "off",
        "padded-blocks": "off",
        "prefer-arrow-callback": "warn",
        "no-spaced-func": "off",
        "no-useless-return": "error",
        "no-duplicate-imports": "off",
        "no-unexpected-multiline": "warn",
        "no-unused-labels": "error",
        "generator-star-spacing": "off",
        "no-debugger": "off",
        "quote-props": "off",
        "no-loop-func": "off",
        "no-new-wrappers": "off",
        "react/forbid-prop-types": "off",
        "valid-typeof": "off",
        "max-nested-callbacks": "off",
        "react/no-did-update-set-state": "off",
        "indent": ["off", 4, {
            "SwitchCase": 1
        }],
        "accessor-pairs": "error",
        "no-undef": "off",
        "no-useless-computed-key": "error",
        "react/jsx-handler-names": "off",
        "require-await": "warn",
        "react/no-render-return-value": "off",
        "no-undef-init": "off",
        "react/no-find-dom-node": "off",
        "for-direction": "off",
        "max-statements-per-line": "off",
        "react/jsx-tag-spacing": "off",
        "react/jsx-equals-spacing": "off",
        "react/jsx-sort-props": "off",
        "switch-colon-spacing": ["error", {
            "after": true,
            "before": false
        }],
        "dot-location": ["warn", "property"],
        "no-ex-assign": "off",
        "no-multiple-empty-lines": "warn",
        "no-this-before-super": "off",
        "multiline-ternary": "off",
        "eqeqeq": "off",
        "no-dupe-class-members": "off",
        "no-with": "off",
        "react/jsx-max-props-per-line": "off",
        "no-multi-assign": "warn",
        "prefer-numeric-literals": "warn",
        "no-obj-calls": "off",
        "react/require-default-props": "off",
        "no-label-var": "off",
        "no-labels": "off",
        "max-len": "off",
        "no-unneeded-ternary": "off",
        "yield-star-spacing": "off",
        "id-length": "off",
        "no-restricted-globals": "off",
        "react/default-props-match-prop-types": "warn",
        "react/no-direct-mutation-state": "off",
        "func-call-spacing": ["error", "never"],
        "constructor-super": "off",
        "no-invalid-regexp": "off",
        "no-lonely-if": "error",
        "indent-legacy": "off",
        "semi-style": ["error", "last"],
        "react/self-closing-comp": "off",
        "vars-on-top": "off",
        "react/jsx-no-duplicate-props": "off",
        "react/no-set-state": "off",
        "id-match": "off",
        "prefer-reflect": "off",
        "sort-imports": "off",
        "no-new": "error",
        "guard-for-in": "off",
        "no-throw-literal": "warn",
        "react/no-array-index-key": "off",
        "operator-linebreak": "off",
        "no-use-before-define": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-compare-neg-zero": "error",
        "yoda": "warn",
        "react/forbid-elements": "off",
        "require-jsdoc": "off",
        "class-methods-use-this": "off",
        "no-negated-in-lhs": "off",
        "react/jsx-uses-react": "off",
        "func-name-matching": "off",
        "no-sparse-arrays": "off",
        "prefer-promise-reject-errors": "warn",
        "react/forbid-component-props": "off",
        "no-return-await": "error",
        "react/require-render-return": "off",
        "no-sequences": "error",
        "no-extra-bind": "off",
        "react/jsx-no-literals": "off",
        "strict": "off",
        "no-floating-decimal": "warn",
        "consistent-this": "off",
        "func-names": ["off", "always"],
        "wrap-regex": "off",
        "no-class-assign": "off",
        "no-trailing-spaces": "off",
        "no-process-env": "off",
        "no-await-in-loop": "off",
        "no-div-regex": "off",
        "new-parens": "off",
        "no-void": "error",
        "no-extra-parens": "off",
        "padding-line-between-statements": "off",
        "no-path-concat": "off",
        "no-empty-character-class": "off",
        "react/no-children-prop": "off",
        "new-cap": "warn",
        "no-catch-shadow": "off",
        "no-prototype-builtins": "off",
        "space-before-blocks": "off",
        "no-control-regex": "warn",
        "no-sync": "off",
        "no-inner-declarations": "off",
        "complexity": ["warn", 10],
        "no-script-url": "warn",
        "consistent-return": ["warn", {
            "treatUndefinedAsUnspecified": true
        }],
        "no-underscore-dangle": "warn",
        "react/prop-types": "off",
        "dot-notation": "off",
        "no-continue": "off",
        "no-restricted-imports": "off"
    }
};
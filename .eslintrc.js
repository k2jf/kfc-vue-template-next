module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'quotes' not works on vue template
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    // ------------------------------------------------------------------------------
    // vue: need to override
    // ------------------------------------------------------------------------------
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 2,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/attributes-order': ['error', {
      'order': [
        'OTHER_ATTR',
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'EVENTS',
        'CONTENT'
      ]
    }],
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase' | 'kebab-case', {
      'registeredComponentsOnly': true,
      'ignores': []
    }],
    'vue/eqeqeq': 'error',
    'vue/match-component-file-name': ['error', {
      'extensions': ['vue'],
      'shouldMatchCase': true
    }],
    // ------------------------------------------------------------------------------
    // vue: need to close
    // ------------------------------------------------------------------------------
    'vue/attribute-hyphenation': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-self-closing': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

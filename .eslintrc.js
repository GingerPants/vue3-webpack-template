module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    // vue
    //'plugin:vue/vue3-essential', // Lv1
    "plugin:vue/vue3-strongly-recommended", // Lv2
    //'plugin:vue/vue3-recommended', // Lv3 - very strict
    //js
    'eslint: recommended' // 콜론 뒤에 붙여쓰니 module에 빨간줄 생김.
  ],
  // 추가적인 코드 규칙을 설정
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never",
    }],
    'vue/html-self-closing': ["error", {
      "html": {
        "void": 'always', // <img /> 셀프클로징 쓸수 있게. 
        "normal": 'never', // 일반 <div>같은 태그는 셀프클로징 안해도 되게. => <div></div> 가능.
        "component": 'always'
      },
      "svg": 'always',
      "math": 'always'
    }],  
    "vue/no-multiple-template-root": "off"
  }
}
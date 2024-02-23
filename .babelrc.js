module.exports = { // 객체 내보내기
  presets: ['@babel/preset-env'], // 일일이 명시해야 하는 js기능 한번에 처리
  plugins: [
    ['@babel/plugin-transform-runtime'] // 비동기처리, 2차원배열(배열안에 배열)
  ]
}
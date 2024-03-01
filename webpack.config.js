// import nodejs 환경에서 어디서는 가져다 쓸 수 있는, 전역모드에서 사용할 수 있게 변수 생성
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin'); // 설치한 패키지를 HtmlPlugin 변수에 삽입.
const CopyPlugin = require('copy-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');


//export
module.exports = {
  // 명시된 확장자는 파일경로에서 생략 가능. 패키지: npm i -D vue-loader@next vue-style-loader @vue/compiler-sfc
  resolve: {
    extensions: ['.js', '.vue'],
    // 경로 별칭, ~부호에 아래와 같이 경로를 넣어줌으로서 간단하게 표현 가능.
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets')
    }
  },

  // 파일을 읽어들이기 시작하는 진입점
  entry: './src/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    
        // __dirname: 현재 파일 위치. 해석하면 현재 파일위치에 dist폴더를 합쳐서 path에 넣어줌. 그리고 main.js와 합쳐서 번들로 output해주는 것임.
    // path: path.resolve(__dirname, 'publica'), filename: 'app.js' => 결과 publica 폴더에 app.js가 생성되고 내용은 entry의 main.js내용이 카피되어 들어감.
    clean: true
  },
    // 기존의 폴더에 파일이 제거되고 새로 명령된 파일이 들어감. $ npm i -D vue-loader@next vue-style-loader @vue/compiler-sfc
  module: {
    rules: [
      {
        test: /.\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/, // 정규표현식: .scss 또는 .css로 끝나는 글자를 찾기
        use: [   // 순서 중요. style부터 작성해야 함.
          'vue-style-loader',
          //'style-loader', // css내용을 해석해서 style을 입혀줌.
          'css-loader', //main.js에서 import로 css파일 가져오게 코딩했음. js에서는 css파일 해석을 못하므로 가능하게 리딩할수있게 하는 명령어.
          'postcss-loader',
          'sass-loader' 
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 제외할 경로
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      }
    ]
  },
  
    
     
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static'}
        // static 내부 내용이 copy가 되서 dist폴더로 paste
      ]
    }),
    new VueLoaderPlugin()
  ],

  devServer: {
    host: 'localhost'
  }
}
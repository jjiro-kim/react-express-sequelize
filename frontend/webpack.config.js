// Webpack load
var webpack = require('webpack');

// 이 객체를 모듈로 내보냄
module.exports = {
    //
    entry: './src/index.js',

    // 합친 파일들을 path의 filename으로 저장
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    // 개발서버 설정
    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',                      // 기본은 localhost, cloud 환경에선 0.0.0.0 setting
        port: 4000,
        contentBase: __dirname + '/public/',  //index file의 위치
    },

    //
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'                  // es6와 react를 일반 자바 형식으로 변경해줌
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    publicPath: './',
                    limit: 10000,
                },
            },
        ]
    },

    //
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

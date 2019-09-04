
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path =require('path');

module.exports = {
    entry:['./src/index.js'],
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'index.js'
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                title:'Test webpack html',
                template:'./src/index.html',
                inject:true,
                minify:{
                    removeComments: true,
                    collapseWhiteSpace: false
                }
            }
        )
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ] 
            }
        ]
    }
};

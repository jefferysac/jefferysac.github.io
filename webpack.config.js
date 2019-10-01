
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path =require('path');

module.exports = {
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
                test:[/.css$|.scss$/],
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ] 
            },
            {
                test:[/.(png|jpg|gif|svg)$/],
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            outputPath: 'assets/images'
                        }
                    }
                ]
            },
            {
                test:/(fonts|imagess)/,
                loaders:['url-loader']
            }
        ]
    }
}

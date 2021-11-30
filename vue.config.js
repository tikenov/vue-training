module.exports = {
    chainWebpack: config => {
      config.module
        .rule('images')
        .test(/\.(gif|png|jpe?g|svg)$/i)
        .use('file-loader')
            .loader('image-webpack-loader')
            .tap(options => ({
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.65, 0.90],
                  speed: 4
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75
                }
            })
        )
    }
}
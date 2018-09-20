module.exports = {

    productionSourceMap: false,

    css: {

        modules: true,

        loaderOptions: {

            css: {

                localIdentName: process.env.NODE_ENV === 'development' ? '[local]_[hash:base64:6]' : '[hash:base64:6]',
                camelCase: true

            }

        }

    }

};

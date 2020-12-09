const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        contentApi: 'fastshop.cdn.content.amplience.net'
    },
    poweredByHeader: false
}
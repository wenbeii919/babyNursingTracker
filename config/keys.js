if (process.env.NODE_ENV === 'production') {
    // we are in production - returns the prod keys
    module.exports = require('./prod');
} else {
    // we are in development (local) - returns the dev keys
    module.exports = require('./dev');
}
var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd +
        '@ds035438.mlab.com:35438/nodetodosample'; 
    }
}


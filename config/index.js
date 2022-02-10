const dotenv = require('dotenv');

function loadConfig() {
    dotenv.config();
}
function getPort() {
    return process.env.PORT;
}

function getDbUrl() {
    return process.env.MONGO_URI;
}

module.exports = {
    load: loadConfig,
    port: getPort,
    dbUrl: getDbUrl,
};

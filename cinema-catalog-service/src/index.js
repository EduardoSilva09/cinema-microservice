const catalog = require('./api/catalog');
const repository = require('./repository/repository');
const server = require('./server/server');

(async () => {
    try {
        await server.start(catalog, repository)
    } catch (error) {
        console.error(error);
    }
})()
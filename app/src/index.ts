'use strict';
import { Server, Request, ResponseToolkit } from "@hapi/hapi";
const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = new Server({
        port: process.env.PORT || 3000,
        host: '0.0.0.0'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request: Request, h: ResponseToolkit) => {

            return 'Hello Docker+Hapi+TypeScript World!';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
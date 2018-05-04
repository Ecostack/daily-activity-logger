import * as express from 'express';
import {UserRoute} from "./backend/routes/UserRoute";
import * as mongoose from 'mongoose';

export class Config {
    static mongo = {
        hostname:'localhost',
        port: 27017,
        database:'activitylog'
    }
}


export class Server {
    static port = 3000;
    static server = null;

    static setupDone = false;

    public static setup() {
        Server.port = 3000;
        Server.server = express();
        this.setupConnections();
        this.routes();

        Server.server.listen(Server.port);
        console.log(`Server listening at http://localhost:${Server.port}`);
    }

    private static setupConnections() {
        const MONGODB_CONNECTION: string = "mongodb://" + Config.mongo.hostname + ":" + Config.mongo.port + "/" + Config.mongo.database;
        const connection: mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);
        mongoose.connect(MONGODB_CONNECTION);

    }

    private static routes() {
        const router = express.Router();
        UserRoute.create(router);
        this.server.use(`/api`, router);
    }
}

Server.setup();



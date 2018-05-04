import * as express from 'express';
import {UserRoute} from "./routes/UserRoute";
import * as mongoose from 'mongoose';
import {NoteRoute} from "./routes/NoteRoute";
import {TaxonomyRoute} from "./routes/TaxonomyRoute";
import * as path from 'path';

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
        this.setupFrontend();
        this.routes();

        Server.server.listen(Server.port);
        console.log(`Server listening at http://localhost:${Server.port}`);
    }

    private static setupFrontend() {
        Server.server.set('view engine', 'pug');

        Server.server.use(express.static('../dist'))
        Server.server.set('views', path.join(__dirname, '/../views'));

        Server.server.get('/', function (req, res) {
            res.render('index');
        });
    }

    private static setupConnections() {
        const MONGODB_CONNECTION: string = "mongodb://" + Config.mongo.hostname + ":" + Config.mongo.port + "/" + Config.mongo.database;
        // const connection: mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);
        mongoose.connect(MONGODB_CONNECTION);

    }

    private static routes() {
        const router = express.Router();
        UserRoute.create(router);
        NoteRoute.create(router);
        TaxonomyRoute.create(router);
        this.server.use(`/api`, router);
    }
}

Server.setup();



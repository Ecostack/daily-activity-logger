import * as express from 'express';
import *  as compression from 'compression'
import *  as  bodyParser from 'body-parser';
import {UserRoute} from "./routes/UserRoute";
import * as mongoose from 'mongoose';
import {NoteRoute} from "./routes/NoteRoute";
import * as connectMongo from 'connect-mongo';
import * as session from 'express-session';
import * as passport from "passport";
import {TaxonomyRoute} from "./routes/TaxonomyRoute";
import * as path from 'path';
import {PassportService} from "./services/PassportService";
import {AuthRoute} from "./routes/AuthRoute";

export class Config {
    public static mongo = {
        hostname: 'localhost',
        port: 27017,
        database: 'activitylog'
    }
    public static session = {
        store: null,
        secret: '1diuiud1iubdiub1',
        cookie: {
            secure: false,
            httpOnly: false,
            maxAge: 30 * 24 * 60 * 60 * 1000
        },
        resave: false,
        saveUninitialized: false,
    }
}


export class Server {
    private static port = 3000;
    private static server = null;

    private static setupDone = false;

    public static setup() {
        if (this.setupDone != true) {
            Server.server = express();
            this.setupMiddleware();
            this.setupConnections();
            this.routes();
            this.setupFrontend();

            Server.server.listen(Server.port);
            console.log(`Server listening at http://localhost:${Server.port}`);
            this.setupDone = true;
        }
    }

    private static setupFrontend() {
        Server.server.set('view engine', 'pug');

        Server.server.use(express.static(path.join(__dirname, '../dist')));
        Server.server.set('views', path.join(__dirname, '/../src/client'));

        Server.server.get('/*', function (req, res) {
            res.render('index');
        });
    }

    private static setupMiddleware() {
        Server.server.use(compression());
        Server.server.use(bodyParser.json());
        Server.server.use(bodyParser.urlencoded({
            extended: true
        }));
    }

    private static setupConnections() {
        const MONGODB_CONNECTION: string = "mongodb://" + Config.mongo.hostname + ":" + Config.mongo.port + "/" + Config.mongo.database;
        mongoose.connect(MONGODB_CONNECTION);

        const MongoStore = connectMongo(session);

        const SessionStore = new MongoStore({
            mongooseConnection: mongoose.connection
        });
        global['SessionStore'] = SessionStore;
        Config.session.store = SessionStore;

        Server.server.use(session(Config.session));
        Server.server.use(passport.initialize());
        Server.server.use(passport.session());
        PassportService.initiateStrategies(passport);
        global['Passport'] = passport;

    }

    private static routes() {
        const router = express.Router();
        UserRoute.create(router);
        NoteRoute.create(router);
        TaxonomyRoute.create(router);
        AuthRoute.create(router);
        this.server.use(`/api`, router);
    }
}

Server.setup();



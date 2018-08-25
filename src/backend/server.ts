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
import {CategoryRoute} from './routes/CategoryRoute';

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

    public static JWT_TOKEN_SECRET = 'G78SVamkozCZxug5fsVdrZ2XGPi4NbBKGheBbgSy';
}


export class Server {
    private port = 3000;
    private server;

    private static instance: Server;

    public static getInstance() {
        if (Server.instance == null) {
            this.instance = new Server();
        }
        return this.instance;
    }

    constructor() {
        this.server = express();
        this.setupMiddleware();
        this.setupConnections();
        this.routes();
        this.setupFrontend();

        this.server.listen(this.port);
        console.log(`Server listening at http://localhost:${this.port}`);
    }

    private setupFrontend() {
        this.server.set('view engine', 'pug');

        this.server.use(express.static(path.join(__dirname, '../dist')));
        this.server.set('views', path.join(__dirname, '/../src/client'));

        this.server.get('/*', function (req, res) {
            res.render('index');
        });
    }

    private setupMiddleware() {
        this.server.use(compression());
        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({
            extended: true
        }));
    }

    private setupConnections() {
        const MONGODB_CONNECTION: string = "mongodb://" + Config.mongo.hostname + ":" + Config.mongo.port + "/" + Config.mongo.database;
        mongoose.connect(MONGODB_CONNECTION);

        const MongoStore = connectMongo(session);

        const SessionStore = new MongoStore({
            mongooseConnection: mongoose.connection
        });
        global['SessionStore'] = SessionStore;
        Config.session.store = SessionStore;

        this.server.use(session(Config.session));
        this.server.use(passport.initialize());
        this.server.use(passport.session());
        PassportService.initiateStrategies(passport);
        global['Passport'] = passport;

    }

    private routes() {
        const router = express.Router();
        UserRoute.create(router);
        NoteRoute.create(router);
        TaxonomyRoute.create(router);
        AuthRoute.create(router);
        CategoryRoute.create(router);
        this.server.use(`/api`, router);
    }
}


Server.getInstance();
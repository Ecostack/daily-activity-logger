
import * as express from 'express';
import {UserRoute} from "./backend/routes/UserRoute";


export class Server {
	static port = 3000;
	static server = null;

	static setup() {
		Server.port = 3000;
		Server.server = express();
		this.setupIndex();
		this.routes();

		Server.server.listen(Server.port);
		console.log(`Server listening at http://localhost:${Server.port}`);
	}

	static setupIndex() {
		// this.server.get('/', FrontEndBundler)
	}

	static routes() {
		const router = express.Router();
		UserRoute.create(router);
		this.server.use(router);
	}
}

Server.setup();



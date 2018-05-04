
import {RouterHelper} from "./RouterHelper";
import {User} from "../models/User";

export class UserRoute {
	static create(router) {
		router.get('/', RouterHelper.asyncMiddleware(async (req, res, next) => {
			res.json(await User.find());
		}));

		/* GET SINGLE PRODUCT BY ID */
		router.get('/:id', RouterHelper.asyncMiddleware(async (req, res, next) => {
			res.json(await User.findById(req.params.id));
		}));

		/* SAVE PRODUCT */
		router.post('/', RouterHelper.asyncMiddleware(async (req, res, next) => {
			res.json(await User.create(req.body));

		}));

		/* UPDATE PRODUCT */
		router.put('/:id', RouterHelper.asyncMiddleware(async (req, res, next) => {
			res.json(await User.findByIdAndUpdate(req.params.id, req.body));

		}));

		/* DELETE PRODUCT */
		router.delete('/:id', RouterHelper.asyncMiddleware(async (req, res, next) => {
			res.json(User.findByIdAndRemove(req.params.id, req.body))
		}));

	}
}
import {RouterHelper} from "./RouterHelper";
import {Note} from "../models/Note";

export class NoteRoute {
	static create(router) {
		router.get('/', RouterHelper.asyncMiddleware(async (req, res, next) => {
			res.json(await Note.find());
		}));

		/* GET SINGLE PRODUCT BY ID */
		router.get('/:id', RouterHelper.asyncMiddleware(async (req, res, next) => {
			res.json(await Note.findById(req.params.id));
		}));

		/* SAVE PRODUCT */
		router.post('/', RouterHelper.asyncMiddleware(async (req, res, next) => {
			res.json(await Note.create(req.body));
			// Note.create(req.body, function (err, post) {
			// 	if (err) return next(err);
			// 	res.json(post);
			// });
		}));

		/* UPDATE PRODUCT */
		router.put('/:id', RouterHelper.asyncMiddleware(async (req, res, next) => {
			res.json(await Note.findByIdAndUpdate(req.params.id, req.body));
			// Note.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
			// 	if (err) return next(err);
			// 	res.json(post);
			// });
		}));

		/* DELETE PRODUCT */
		router.delete('/:id', RouterHelper.asyncMiddleware(async (req, res, next) => {
			res.json(Note.findByIdAndRemove(req.params.id, req.body))
			//
			// Note.findByIdAndRemove(req.params.id, req.body, function (err, post) {
			// 	if (err) return next(err);
			// 	res.json(post);
			// });
		}));

	}
}
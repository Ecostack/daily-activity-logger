export class RouterHelper {
	static asyncMiddleware = fn =>
		(req, res, next) => {
			Promise.resolve(fn(req, res, next))
				.catch(next);
		};
}
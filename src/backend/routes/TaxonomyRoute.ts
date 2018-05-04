import {RouterHelper} from "./RouterHelper";
import {Taxonomy} from "../models/Taxonomy";
import * as mongoose from 'mongoose';

export class TaxonomyRoute {
    static ROUTER_PREFIX = 'taxonomy';

    static create(router) {
        router.get(`/${TaxonomyRoute.ROUTER_PREFIX}/`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await Taxonomy.find());
        }));

        /* GET SINGLE PRODUCT BY ID */
        router.get(`/${TaxonomyRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await Taxonomy.findById(mongoose.Types.ObjectId(
                req.params.id)));
        }));

        /* SAVE PRODUCT */
        router.post(`/${TaxonomyRoute.ROUTER_PREFIX}/`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await Taxonomy.create(req.body));

        }));

        /* UPDATE PRODUCT */
        router.put(`/${TaxonomyRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await Taxonomy.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), req.body));

        }));

        /* DELETE PRODUCT */
        router.delete(`/${TaxonomyRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await Taxonomy.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), req.body))
        }));

    }
}
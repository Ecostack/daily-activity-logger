import {RouterHelper} from "./RouterHelper";
import {TaxonomyModel} from "../models/TaxonomyModel";
import * as mongoose from 'mongoose';

export class TaxonomyRoute {
    static ROUTER_PREFIX = 'taxonomy';

    static create(router) {
        router.get(`/${TaxonomyRoute.ROUTER_PREFIX}/`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await TaxonomyModel.find());
        }));

        /* GET SINGLE PRODUCT BY ID */
        router.get(`/${TaxonomyRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await TaxonomyModel.findById(mongoose.Types.ObjectId(
                req.params.id)));
        }));

        /* SAVE PRODUCT */
        router.post(`/${TaxonomyRoute.ROUTER_PREFIX}/`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await TaxonomyModel.create(req.body));

        }));

        /* UPDATE PRODUCT */
        router.put(`/${TaxonomyRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await TaxonomyModel.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), req.body));

        }));

        /* DELETE PRODUCT */
        router.delete(`/${TaxonomyRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await TaxonomyModel.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), req.body))
        }));

    }
}
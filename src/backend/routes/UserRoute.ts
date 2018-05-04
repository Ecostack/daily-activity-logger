import {RouterHelper} from "./RouterHelper";
import {UserModel} from "../models/UserModel";
import * as mongoose from 'mongoose';

export class UserRoute {
    static ROUTER_PREFIX = 'user';

    static create(router) {
        router.get(`/${UserRoute.ROUTER_PREFIX}/`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await UserModel.find());
        }));

        /* GET SINGLE PRODUCT BY ID */
        router.get(`/${UserRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await UserModel.findById(mongoose.Types.ObjectId(
                req.params.id)));
        }));

        /* SAVE PRODUCT */
        router.post(`/${UserRoute.ROUTER_PREFIX}/`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await UserModel.create(req.body));

        }));

        /* UPDATE PRODUCT */
        router.put(`/${UserRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await UserModel.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), req.body));

        }));

        /* DELETE PRODUCT */
        router.delete(`/${UserRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await UserModel.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), req.body))
        }));

    }
}
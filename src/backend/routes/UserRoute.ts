import {RouterHelper} from "./RouterHelper";
import {UserModel} from "../models/UserModel";
import * as mongoose from 'mongoose';

export class UserRoute {
    private static  ROUTER_PREFIX = 'user';

    public static create(router) {
        router.get(`/${UserRoute.ROUTER_PREFIX}/`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await UserModel.find());
        }));

        router.get(`/${UserRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await UserModel.findById(mongoose.Types.ObjectId(
                req.params.id)));
        }));

        router.post(`/${UserRoute.ROUTER_PREFIX}/`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await UserModel.create(req.body));

        }));

        router.put(`/${UserRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await UserModel.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), req.body));

        }));

        router.delete(`/${UserRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await UserModel.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), req.body))
        }));
    }
}
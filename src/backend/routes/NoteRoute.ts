import {RouterHelper} from "./RouterHelper";
import {NoteModel} from "../models/NoteModel";
import * as mongoose from 'mongoose';

export class NoteRoute {
    static ROUTER_PREFIX = 'note';

    static create(router) {
        router.get(`/${NoteRoute.ROUTER_PREFIX}/`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await NoteModel.find());
        }));

        /* GET SINGLE PRODUCT BY ID */
        router.get(`/${NoteRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await NoteModel.findById(mongoose.Types.ObjectId(
                req.params.id)));
        }));

        /* SAVE PRODUCT */
        router.post(`/${NoteRoute.ROUTER_PREFIX}/`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await NoteModel.create(req.body));
        }));

        /* UPDATE PRODUCT */
        router.put(`/${NoteRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await NoteModel.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), req.body));
        }));

        /* DELETE PRODUCT */
        router.delete(`/${NoteRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await NoteModel.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), req.body))
        }));

    }
}
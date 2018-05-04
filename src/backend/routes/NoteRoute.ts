import {RouterHelper} from "./RouterHelper";
import {Note} from "../models/Note";
import * as mongoose from 'mongoose';

export class NoteRoute {
    static ROUTER_PREFIX = 'note';

    static create(router) {
        router.get(`/${NoteRoute.ROUTER_PREFIX}/`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await Note.find());
        }));

        /* GET SINGLE PRODUCT BY ID */
        router.get(`/${NoteRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await Note.findById(mongoose.Types.ObjectId(
                req.params.id)));
        }));

        /* SAVE PRODUCT */
        router.post(`/${NoteRoute.ROUTER_PREFIX}/`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await Note.create(req.body));
        }));

        /* UPDATE PRODUCT */
        router.put(`/${NoteRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await Note.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), req.body));
        }));

        /* DELETE PRODUCT */
        router.delete(`/${NoteRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await Note.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), req.body))
        }));

    }
}
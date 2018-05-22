import {RouterHelper} from "./RouterHelper";
import {NoteModel} from "../models/NoteModel";
import * as mongoose from 'mongoose';

export class NoteRoute {
    private static ROUTER_PREFIX = 'note';

    static create(router) {
        router.get(`/${NoteRoute.ROUTER_PREFIX}/`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await NoteModel.find());
        }));

        router.get(`/${NoteRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await NoteModel.findById(mongoose.Types.ObjectId(
                req.params.id)));
        }));

        router.post(`/${NoteRoute.ROUTER_PREFIX}/`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await NoteModel.create(req.body));
        }));

        router.put(`/${NoteRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await NoteModel.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), req.body));
        }));

        router.delete(`/${NoteRoute.ROUTER_PREFIX}/:id`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            res.json(await NoteModel.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), req.body))
        }));

        router.get(`/${NoteRoute.ROUTER_PREFIX}/category/:category`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            console.log('get notes for category ' + req.params.category);
            res.json(await NoteModel.find( {'notice': {'$regex': req.params.category, '$options': 'i' }}));
        }));
    }
}
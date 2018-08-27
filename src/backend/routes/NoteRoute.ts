import {RouterHelper} from "./RouterHelper";
import {NoteModel} from "../models/NoteModel";
import * as mongoose from 'mongoose';
import {isAuthenticatedJWT} from "../policies/isAuthenticatedJWT";

export class NoteRoute {
    private static ROUTER_PREFIX = 'note';

    static create(router) {
        router.get(`/${NoteRoute.ROUTER_PREFIX}/`, isAuthenticatedJWT, RouterHelper.asyncMiddleware(async (req, res, next) => {
            const query = {
                deleted: {$ne: true},
                userid: req.user.id
            };

            res.json(await NoteModel.find(query));
        }));

        router.get(`/${NoteRoute.ROUTER_PREFIX}/:id`, isAuthenticatedJWT, RouterHelper.asyncMiddleware(async (req, res, next) => {
            const query = {
                _id: mongoose.Types.ObjectId(
                    req.params.id),
                deleted: {$ne: true},
                userid: req.user.id
            };
            res.json(await NoteModel.findOne(query));
        }));

        router.post(`/${NoteRoute.ROUTER_PREFIX}/`, isAuthenticatedJWT, RouterHelper.asyncMiddleware(async (req, res, next) => {
            const body = {...req.body, userid: req.user.id};
            res.json(await NoteModel.create(body));
        }));

        router.put(`/${NoteRoute.ROUTER_PREFIX}/:id`, isAuthenticatedJWT, RouterHelper.asyncMiddleware(async (req, res, next) => {
            const query = {
                _id: mongoose.Types.ObjectId(
                    req.params.id),
                deleted: {$ne: true},
                userid: req.user.id
            };

            const body = {
                ...req.body,
                userid: req.user.id
            };
            res.json(await NoteModel.findOneAndUpdate(query, body));
        }));

        router.delete(`/${NoteRoute.ROUTER_PREFIX}/:id`, isAuthenticatedJWT, RouterHelper.asyncMiddleware(async (req, res, next) => {
            const query = {
                _id: mongoose.Types.ObjectId(
                    req.params.id),
                deleted: {$ne: true},
                userid: req.user.id
            };
            res.json(await NoteModel.findOneAndRemove(query))
        }));

        router.get(`/${NoteRoute.ROUTER_PREFIX}/category/:category`, isAuthenticatedJWT, RouterHelper.asyncMiddleware(async (req, res, next) => {
            console.log('get notes for category ' + req.params.category);

            const query = {
                deleted: {$ne: true},
                userid: req.user.id,
                notice: {'$regex': req.params.category, '$options': 'i'}

            };
            res.json(await NoteModel.find(query));
        }));
    }
}
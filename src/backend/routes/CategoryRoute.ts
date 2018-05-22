import {RouterHelper} from "./RouterHelper";
import {NoteModel} from "../models/NoteModel";
import * as mongoose from 'mongoose';

export class CategoryRoute {
    private static ROUTER_PREFIX = 'category';

    static create(router) {
        router.get(`/${CategoryRoute.ROUTER_PREFIX}/`, RouterHelper.asyncMiddleware(async (req, res, next) => {
            /*TODO get all notes and extract the categories */
            var categories = [
                {"category":"@testingBegin"},
                {"category":"@home"},
                {"category":"@work"},
                {"category":"@testingEnd"}
            ];
            res.json(await categories);
        }));
    }
}
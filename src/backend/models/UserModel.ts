import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import {UserService} from "../services/UserService";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
	updated_at: { type: Date, default: Date.now },
});

UserSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

UserSchema.set('toJSON', {
    virtuals: true,
    transform: function (doc, ret, options) {
        delete ret._id;
        delete ret.__v;
        return ret
    }
});

UserSchema.pre('save', function (next) {
    try {
        const user = this;
        const hash = UserService.generateHash(user.password);
        user.password = hash;
        next();
    } catch(err) {
        next(err);
    }
});

export const UserModel = mongoose.model('User', UserSchema);

import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

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
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});

export const UserModel = mongoose.model('User', UserSchema);

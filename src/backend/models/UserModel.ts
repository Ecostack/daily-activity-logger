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

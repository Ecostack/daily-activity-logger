import * as mongoose from 'mongoose';

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

export const User = mongoose.model('User', UserSchema);

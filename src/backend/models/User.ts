import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	email: String,
	password: String,
	updated_at: { type: Date, default: Date.now },
});

export const User = mongoose.model('User', UserSchema);

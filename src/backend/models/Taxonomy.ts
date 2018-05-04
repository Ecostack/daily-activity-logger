import * as mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({

	email: String,
	password: String,
	updated_at: { type: Date, default: Date.now },
});

export const Note = mongoose.model('Note', NoteSchema);

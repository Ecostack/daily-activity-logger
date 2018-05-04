import * as mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
    notice: String,
    title: String,
    userid: String,
    updated_at: {type: Date, default: Date.now},
});

export const Note = mongoose.model('Note', NoteSchema);

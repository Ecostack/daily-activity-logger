import * as mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
    notice: String,
    title: String,
    userid: String,
    updated_at: {type: Date, default: Date.now},
});

NoteSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

NoteSchema.set('toJSON', {
    virtuals: true,
    transform: function (doc, ret, options) {
        delete ret._id;
        delete ret.__v;
        return ret
    }
});

export const NoteModel = mongoose.model('Note', NoteSchema);

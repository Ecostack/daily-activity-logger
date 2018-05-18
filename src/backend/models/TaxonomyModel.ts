import * as mongoose from 'mongoose';

const TaxonomySchema = new mongoose.Schema({
	user: String,
	updated_at: { type: Date, default: Date.now },
});

TaxonomySchema.virtual('id').get(function(){
    return this._id.toHexString();
});

TaxonomySchema.set('toJSON', {
    virtuals: true,
    transform: function (doc, ret, options) {
        delete ret._id
        delete ret.__v;
        return ret
    }
});

export const TaxonomyModel = mongoose.model('Taxonomy', TaxonomySchema);

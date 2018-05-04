import * as mongoose from 'mongoose';

const TaxonomySchema = new mongoose.Schema({
	user: String,
	updated_at: { type: Date, default: Date.now },
});

export const TaxonomyModel = mongoose.model('Taxonomy', TaxonomySchema);

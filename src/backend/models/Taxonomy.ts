import * as mongoose from 'mongoose';

const TaxonomySchema = new mongoose.Schema({

	email: String,
	password: String,
	updated_at: { type: Date, default: Date.now },
});

export const Taxonomy = mongoose.model('Taxonomy', TaxonomySchema);

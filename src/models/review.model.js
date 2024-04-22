const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const reviewSchema = new Schema({
	body: String,
	rating: Number,
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

const Review = model('Review', reviewSchema);

module.exports = Review;

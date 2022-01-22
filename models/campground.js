const mongoose = require('mongoose');
const Review = require('./review');
const Schema = mongoose.Schema;

// https://res.cloudinary.com/demo/image/upload/w_150,h_300,c_fill/boulder.jpg

const ImageSchema = new Schema({
    url: String,
    filename: String
});
ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200'); //replace only first match
});

const CampgroundSchema = new Schema({
    title: String,
    images: [ImageSchema],

    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },

    price: Number,
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});


//camoground delete middleware
CampgroundSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
                //brisanje svakog review-a koji je povezan sa id-em doc kojeg smo izbrisali
            }
        })
    }
})

module.exports = mongoose.model('Campground', CampgroundSchema);
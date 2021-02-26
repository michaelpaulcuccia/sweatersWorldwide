import mongoose from 'mongoose';

const sweaterSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    fit: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    fabric: {
        type: String,
        required: true
    },
    quantityInStock: {
        type: Number,
        required: true
    },
    purchasePrice: {
        type: Number,
        required: true
    },
    retailPrice: {
        type: Number,
        required: true
    },
    currentlyListed: {
        type: Boolean
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    image: {
        type: String,
        required: true
    }
}, {
    //createdAt and updatedAt
    timestamps: true
}
)

const Sweater = mongoose.model('Sweater', sweaterSchema);

export default Sweater;
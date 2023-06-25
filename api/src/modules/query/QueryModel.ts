import mongoose from 'mongoose'

const QuerySchema = new mongoose.Schema({
    query: {
        type: String,
        required: true
    },

    response: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },
}, { versionKey: false })

const QueryModel = mongoose.model('query', QuerySchema)

export default QueryModel
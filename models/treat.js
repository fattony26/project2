import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const treatSchema = new Schema ({
    item: String,
    amount: Number,
    date: Date
},{
    timestamps: true
})

const Treat = mongoose.model('Treat', treatSchema);

export{
    Treat
}
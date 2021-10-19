import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const messageSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    content: String,
    imgURL: String
 },{
    timestamps: true
})

const Message = mongoose.model('Message', messageSchema)

export {
  Message
}
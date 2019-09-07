import mongoose from 'mongoose';

export default mongoose.model('FacebookPost', mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
}));

import mongoose from 'mongoose';

export default mongoose.model('Contact', mongoose.Schema({
  mail: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}));

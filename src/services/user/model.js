import mongoose from 'mongoose';

export default mongoose.model('User', mongoose.Schema({
  mail: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
  },
  isActive: {
    type: Boolean,
  },
}));

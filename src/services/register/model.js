import mongoose from 'mongoose';

export default mongoose.model('Resource', mongoose.Schema({
  key: {
    type: String,
    primaryKey: true,
  },
}));

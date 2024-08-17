import mongoose from 'mongoose';

const appSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: String,
  appPath: { type: String, required: true },
  appcom: { type: String, required: true },
  configuration: String,
});

const AppModel = mongoose.model('App', appSchema);

export default AppModel;

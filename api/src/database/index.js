import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/User';
import File from '../app/models/file';
import mongoose from 'mongoose';
import Developer from '../app/models/Developers';

const models = [User, File, Developer];
class Database{
  constructor(){
    this.init();
    this.mongo();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/hackathon',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
      }
    );
  }
}
export default new Database();

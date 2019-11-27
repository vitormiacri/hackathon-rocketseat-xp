import Sequelize, { Model } from 'sequelize';

class Developer extends Model {

  static init(sequelize) {
    super.init(
      {
        biography: Sequelize.STRING,
        career: Sequelize.STRING,
        resume: Sequelize.STRING,
        },
        {
          sequelize,
        }
      );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
  }
 // static associate(models) {
  //  this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
 // }
}

export default Developer;

import Sequelize, { Model } from "sequelize";

class Tutor extends Model {
  static init() {
    super.init({

    });

  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'student_id', as: 'studant' });
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'developer_id', as: 'developer'});
  }

}

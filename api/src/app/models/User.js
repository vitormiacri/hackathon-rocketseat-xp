import Sequelize, { Model } from 'sequelize';
import bcrypy from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
   super.init(
     {
       name: Sequelize.STRING,
       email: Sequelize.STRING,
       password: Sequelize.VIRTUAL,
       password_hash: Sequelize.STRING,
       developer: Sequelize.BOOLEAN,
     },
     {
       sequelize,
     }
   );

   this.addHook('beforeSave', async user => {
      if(user.password) {
         user.password_hash = await bcrypy.hash(user.password, 8);
      }
   });
     return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }

  checkpassword(password) {
    return bcrypy.compare(password, this.password_hash);
  }
}
export default User;

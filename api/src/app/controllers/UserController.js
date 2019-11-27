import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      developer: Yup.boolean().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Valid is fails' });
    }

    const userExist = await User.findOne({ where: { email: req.body.email } });
    if (userExist) {
      return res.status(400).json({ erro: 'User already exists' });
    }
    const { id, name, email, developer } = await User.create(req.body);
    return res.json({
      id,
      name,
      email,
      developer
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string(),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      )
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Valid is fails' });
    }

    const { email, oldPassword } = req.body;
    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExist = await User.findOne({ where: { email } });

      if (userExist) {
        return res
          .status(400)
          .json({ erro: 'alert exists user for this email ' });
      }
    }

    if (oldPassword && !(await user.checkpassword(oldPassword))) {
      return res.status(401).json({ erro: 'Passwor does not match' });
    }

    const { id, name, developer } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      developer
    });
  }
}

export default new UserController();

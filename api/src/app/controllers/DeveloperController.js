import * as Yup from 'yup';

import Developer from '../models/Developers';
import User from '../models/User';

class DeveloperController {
  async store(req, res) {
    const schema = Yup.object().shape({
      biography: Yup.string().required(),
      career: Yup.string().required(),
      resume: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'valid is fails' });
    }

    const { id, biography, career, resume } = await Developer.create({
      biography: req.body.biography,
      career: req.body.career,
      resume: req.body.resume,
      user_id: req.userId
    });

    return res.json(id, biography, career, resume);
  }

  async index(req, res) {
    const developers = await Developer.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'email']
        }
      ]
    });
    res.json(developers);
  }
}

export default new DeveloperController();

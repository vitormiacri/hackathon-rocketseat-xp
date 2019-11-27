import { promisify } from 'util';
import jwt from 'jsonwebtoken';

import configAuth from '../../config/auth'

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
   if(!authHeader) {
     return res.status(401).json({  erro: 'token not provided'});
   }

   const [, token] = authHeader.split( ' ');

   try {

     const decoder = await promisify(jwt.verify)(token, configAuth.secret);

     req.userId = decoder.id;

     return next();

   } catch (error) {
     return res.status(401).json({ erro: 'token invalid' });
   }
};

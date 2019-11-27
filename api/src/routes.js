import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
import DeveloperController from './app/controllers/DevelopedController';


import multer from 'multer';
import multerConfig from './config/multer';


const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store);
routes.post('/developer', DeveloperController.store);
routes.get('/developer', DeveloperController.index);

export default routes;

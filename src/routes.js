import { Router } from 'express';

const routes = new Router();

routes.get('/teste', (req, res) => res.send('Hellow World'));

export default routes;

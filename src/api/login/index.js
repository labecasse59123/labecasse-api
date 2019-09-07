import { Router } from 'express';

import * as Controller from './controller';

const router = Router();

router.post('/', Controller.post);

export default router;

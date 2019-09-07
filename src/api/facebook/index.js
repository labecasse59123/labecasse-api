import { Router } from 'express';

import * as Controller from './controller';

const router = Router();

router.get('/posts', Controller.list);

export default router;

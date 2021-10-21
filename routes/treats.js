import { Router } from 'express';
import * as treatsCtrl from './../controllers/treats.js';

const router = Router()

router.get('/', treatsCtrl.index)
router.get('/new', treatsCtrl.new)
router.post('/', treatsCtrl.create)
router.delete('/:id', treatsCtrl.delete);
router.get('/:id/edit', treatsCtrl.edit);
router.put('/:id', treatsCtrl.update);

export {
    router
}
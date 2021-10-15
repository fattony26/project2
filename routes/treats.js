import { Router } from 'express';
import * as treatsCtrl from './../controllers/treats.js';

const router = Router()

router.get('/new', treatsCtrl.new)
router.post('/', treatsCtrl.create)
router.get('/', treatsCtrl.index)

export{
    router
}
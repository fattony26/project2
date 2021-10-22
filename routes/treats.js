import { Router } from 'express';
import * as treatsCtrl from './../controllers/treats.js';

const router = Router()

router.get('/', isLoggedIn, treatsCtrl.index)
router.get('/new', isLoggedIn, treatsCtrl.new)
router.post('/', isLoggedIn, treatsCtrl.create)
router.delete('/:id', isLoggedIn, treatsCtrl.delete);
router.get('/:id/edit', isLoggedIn, treatsCtrl.edit);
router.put('/:id', isLoggedIn, treatsCtrl.update);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

export {
    router
}
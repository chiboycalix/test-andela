import express from 'express';
import upload from '../helpers/imgUpload';
import UserController from '../controllers/UserController';

const router = express.Router();

router.post('/signup', upload.single('passportUrl'), UserController.createUser);
router.post('/login', UserController.loginUser);


export default router;
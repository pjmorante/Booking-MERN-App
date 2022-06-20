import express from 'express';

import {
  deleteUser,
  updateUser,
  getUser,
  getAllUsers,
} from '../controllers/user.controller.js';
import { verifyAdmin, verifyUser } from '../ultils/verifyToken.js';

const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('You are logged in');
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('You are logged in and you can delete your account');
// });

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('Hello Admin, You are logged in');
// });

router.put('/:id', verifyUser, updateUser);

router.delete('/:id', verifyUser, deleteUser);

router.get('/:id', verifyUser, getUser);

router.get('/', verifyAdmin, getAllUsers);

export default router
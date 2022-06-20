import express from 'express';

import {
  deleteUser,
  updateUser,
  getUser,
  getAllUsers,
} from '../controllers/user.controller.js';
import { verifyAdmin, verifyToken, verifyUser } from '../ultils/verifyToken.js';

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

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.get('/:id', getUser);

router.get('/', getAllUsers);

export default router
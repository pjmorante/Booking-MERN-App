import express from 'express';
import {
  deleteUser,
  updateUser,
  getUser,
  getAllUsers,
} from '../controllers/user.controller.js';

const router = express.Router();

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.get('/:id', getUser);

router.get('/', getAllUsers);

export default router
import express from 'express';

import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from '../controllers/room.controller.js';
import { verifyAdmin } from '../ultils/verifyToken.js';

const router = express.Router();

router.post('/:hotelId', verifyAdmin, createRoom);

router.put('/:id', verifyAdmin, updateRoom);

router.delete('/:id/:hotelId', verifyAdmin, deleteRoom);

router.get('/:id', getRoom);

router.get('/', getAllRooms);

export default router;

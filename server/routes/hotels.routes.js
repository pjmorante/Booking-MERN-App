import express from 'express';

import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotel.controller.js';
import { verifyAdmin } from '../ultils/verifyToken.js';

const router = express.Router();

router.post('/', verifyAdmin, createHotel);

router.put('/:id', verifyAdmin, updateHotel);

router.delete('/:id', verifyAdmin, deleteHotel);

router.get('/:id', getHotel);

router.get('/', getAllHotels);


export default router;

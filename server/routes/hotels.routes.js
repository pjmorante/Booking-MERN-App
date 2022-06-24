import express from 'express';

import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotel.controller.js';
import { verifyAdmin } from '../ultils/verifyToken.js';

const router = express.Router();

router.post('/', verifyAdmin, createHotel);

router.put('/:id', verifyAdmin, updateHotel);

router.delete('/find/:id', verifyAdmin, deleteHotel);

router.get('/:id', getHotel);

router.get('/', getAllHotels);

router.get('/countByCity', countByCity);

router.get('/countByType', countByType);


export default router;

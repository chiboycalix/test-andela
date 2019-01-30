import express from 'express';
import OfficeController from '../controllers/OfficeController';


const router = express.Router();

router.post('/', OfficeController.createOffice);
router.get('/', OfficeController.getOffices);
router.get('/:officeId', OfficeController.getOffice);


export default router;
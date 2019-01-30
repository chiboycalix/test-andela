/* eslint-disable import/no-unresolved */
import express from 'express';
import upload from '../helpers/imgUpload';
import PartyController from '../controllers/PartyController';

const router = express.Router();

router.post('/', upload.single('logoUrl'), PartyController.createParty);
router.get('/', PartyController.getParties);
router.get('/:partyId', PartyController.getParty);
router.patch('/:partyId/:partyName', PartyController.patchParty);
router.delete('/:partyId', PartyController.deleteParty);


export default router;
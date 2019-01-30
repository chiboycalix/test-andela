/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
import parties from '../db/partyDB';
import httpResponse from '../helpers/response';

class PartyController {
// Create party Controller function
  createParty(req, res) {
    const { name, path } = req.body;
    if (!name || !path) {
      return httpResponse(res, 400, 'All fields are required');
    }
    parties.push({
      id: parties.length + 1,
      name,
      path,
    });
    return httpResponse(res, 201, 'Party created successfully', parties[parties.length - 1]);
  }

  // Get all parties Controller function
  getParties(req, res) { 
    return httpResponse(res, 200, 'Success', parties);
  }

  // Get party Controller function
  getParty(req, res) {
    const { partyId } = req.params;
    for (let i = 0; i < parties.length; i += 1) {
      if (parties[i].id === parseInt(partyId, 10)) {
        return httpResponse(res, 200, 'success', parties[i]);
      }
    }
    return httpResponse(res, 404, 'Party does not exist');
  }

  // Patch party Controller function
  patchParty(req, res) {
    const { partyName } = req.params;
    const { name } = req.body;
    for (let i = 0; i < parties.length; i += 1) {
      if (parties[i].name === partyName) {
        if (!name) {
          return httpResponse(res, 400, 'Name field is required');
        }
        parties[i].name = name;
        return httpResponse(res, 200, 'Party updated successfully', parties[i]);
      }
      return httpResponse(res, 404, 'Party does not exist');
    }
  }

  // Delete party Controller function
  deleteParty(req, res) {
    const { partyId } = req.params;
    for (let i = 0; i < parties.length; i += 1) {
      if (parties[i].id === parseInt(partyId, 10)) {
        parties.splice(parties[i].id - 1, 1);
        return httpResponse(res, 200, 'party deleted');
      }
      return httpResponse(res, 404, 'party does not exist');
    }
  }
}

const partyController = new PartyController();
export default partyController;
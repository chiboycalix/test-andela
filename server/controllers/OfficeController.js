/* eslint-disable class-methods-use-this */
import offices from '../db/officeDB';
import httpResponse from '../helpers/response';

class OfficeController {
  createOffice(req, res) {
    const { type, name } = req.body;
    if (!type || !name) {
      return httpResponse(res, 400, 'All fields are required');
    }
    offices.push({
      id: offices.length + 1,
      type,
      name,
    });
    return httpResponse(res, 201, 'Office created successfully', offices[offices.length - 1]);
  }

  getOffices(req, res) {
    return httpResponse(res, 200, 'Success', offices);
  }

  getOffice(req, res) {
    const { officeId } = req.params;
    for (let i = 0; i < offices.length; i += 1) {
      if (offices[i].id === parseInt(officeId, 10)) {
        return httpResponse(res, 200, 'success', offices[i]);
      }
    }
    return httpResponse(res, 404, 'Office does not exist');
  }
}

const officeController = new OfficeController();
export default officeController;

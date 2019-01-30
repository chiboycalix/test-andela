/* eslint-disable class-methods-use-this */
import users from '../db/userDB';
import httpResponse from '../helpers/response';


class UserController {
  createUser(req, res) {
    const { 
      firstName,
      lastName,
      otherName,
      email, 
      phoneNumber, 
      password,
    } = req.body;
    const { path } = req.file;
    console.log(path);
    if (!email || !password) {
      return httpResponse(res, 400, 'All fields are required');
    }
    for (let i = 0; i < users.length; i += 1) {
      if (users[i].email === email) {
        return httpResponse(res, 409, 'Email already exists');
      }
    }
    users.push({
      id: users.length + 1,
      firstName,
      lastName,
      otherName,
      email,
      password,
      phoneNumber,
      path,
    });
    console.log(users[users.length - 1]);
    return httpResponse(res, 201, 'Account created successfully', users[users.length - 1]);
  }

  loginUser(req, res) {
    const { firstName, lastName } = req.body;
    for (let i = 0; i < users.length; i += 1) {
      if (users[i].firstName === firstName && users[i].lastName === lastName) {
        return httpResponse(res, 200, 'login successful');
      }
    }
    return httpResponse(res, 404, 'user not found');
  }
}

const userController = new UserController();
export default userController;
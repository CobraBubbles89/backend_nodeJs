import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.get('/', function (req, res, next) {
    const users = userService.getAllUsers();
    if (users) {
        res.status(200).send(JSON.stringify(users));
    } else {
        const error = {
            "error": true,
            "message": "Users does not found!"
        }
        res.status(404).send(JSON.stringify(error));
    }
});

router.get('/:id', (req, res) => {
  const data = userService.getUserById(req.params.id);
  console.log(data)
    if (data) {
        res.status(200).send(JSON.stringify(data));
    } else {
        const error = {
            "error": true,
            "message": "User does not found!"
        };
        res.status(404).send(JSON.stringify(error));
    }
})

router.post('/', (req, res) => {
  const createUser = userService.createUser(req.body);
  if (createUser) {
    res.status(200).send(JSON.stringify('Message: User created successfully!'))
  } else {
        const error = {
            "error": true,
            "message": "Sorry, user is not created.."
        };
        res.status(400).send(JSON.stringify(error));
  }
});

router.put('/:id', function (req, res) {
    const updateUser = userService.updateUser(req.params.id, req.body);
    if (updateUser) {
        res.status(200).send(JSON.stringify({
            "message": "User update success"
        }));
    } else {
        const error = {
            "error": true,
            "message": "Sorry, User does not updated!"
        };
        res.status(400).send(JSON.stringify(error));
    }
});

router.delete('/:id', (req, res) => {
      const user = userService.deleteUser(req.params.id);
    if (user) {
        res.status(200).send(JSON.stringify({
            "message": "User deleted success"
        }));
    } else {
        const error = {
            "error": true,
            "message": "Sorry, user does not deleted!"
        };
        res.status(400).send(JSON.stringify(error));
    }
});


export { router };

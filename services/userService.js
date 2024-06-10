import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user

  getAllUsers() {
    const users = userRepository.getAll();
    if (!users) {
      return null;
    } else {
      return users;
    }
  }

  createUser(data) {
    return userRepository.create(data);
  }

  updateUser(id, data) {
    return userRepository.update(id, data);
  }

  deleteUser(id) {
    const user = userRepository.delete(id);
    if (!user) {
        return null;
    }
    return user;
  }
  
  getUserById(search) {
    const user = userRepository.getOne(search);
    if (!user) {
        return null;
    }
    return user;
}

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
}

const userService = new UserService();

export { userService };

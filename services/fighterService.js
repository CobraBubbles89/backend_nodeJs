import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  getAllFighters() {
    return fighterRepository.getAll();
  }

  addFighter(data) {
    return fighterRepository.create(data);
  }

  getFighterById(id) {
    return fighterRepository.getOne(id);
  }

  updateFighter(id, data) {
    return fighterRepository.update(id, data);
  }

  deleteFighter(id) {
    return fighterRepository.delete(id);
  }


}





const fighterService = new FighterService();

export { fighterService };

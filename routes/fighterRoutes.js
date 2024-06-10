import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter
router.get('/', function (req, res) {
    const fighters = fighterService.getAllFighters();
    if (fighters) {
        res.status(200).send(JSON.stringify(fighters));
    } else {
        const error = {
            "error": true,
            "message": "Fighters does not found!"
        }
        res.status(404).send(JSON.stringify(error));
    }
});

router.post('/', (req, res) => {
  const fighters = fighterService.addFighter(req.body);
  if (fighters) {
    res.status(200).send(JSON.stringify(fighters));
  } else {
    const error = {
      "error": true,
      "message": "Fighter is not created!"
    }
    res.status(404).send(JSON.stringify(error));
  }
});

router.get('/:id', (req, res) => {
  const oneFighter = fighterService.getFighterById(req.params.id);
  if (oneFighter) {
    res.status(200).send(JSON.stringify(oneFighter));
  } else {
    const error = {
      "error": true,
      "message": "Fighter is not found!"
    }
    res.status(404).send(JSON.stringify(error));
  }
});

router.put('/:id', function (req, res) {
    const updateFighter = fighterService.updateFighter(req.params.id, req.body);
    if (updateFighter) {
        res.status(200).send(JSON.stringify({
            "message": "User update success"
        }));
    } else {
        const error = {
            "error": true,
            "message": "Sorry, fighter does not updated!"
        };
        res.status(400).send(JSON.stringify(error));
    }
});

router.delete('/:id', (req, res) => {
  const deleteFighter = fighterService.deleteFighter(req.params.id);
      if (deleteFighter) {
        res.status(200).send(JSON.stringify({
            "message": "User deleted success"
        }));
    } else {
        const error = {
            "error": true,
            "message": "Sorry, fighter does not deleted!"
        };
        res.status(400).send(JSON.stringify(error));
    }
})

export { router };

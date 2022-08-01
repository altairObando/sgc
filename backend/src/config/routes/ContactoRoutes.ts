import express = require('express');
import { ContactoController  } from '../../controllers/ContactoController';

const router = express.Router();
const controller   = new ContactoController();
router.get("/", controller.retrieve)
      .post("/",controller.create);

router.put("/:id", controller.update)
      .get("/:id", controller.findById)
      .delete("/:id", controller.delete);

export = router;

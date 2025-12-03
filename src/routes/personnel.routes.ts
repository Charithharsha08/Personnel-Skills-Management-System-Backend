import { Router } from "express";
import { PersonnelController} from "../controller/personnel.controller";

const router = Router();

router.get("/", PersonnelController.getAll);
router.post("/", PersonnelController.create);
router.get("/:id", PersonnelController.getById);
router.put("/:id", PersonnelController.update);
router.delete("/:id", PersonnelController.delete);

export default router;

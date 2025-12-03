import {Router} from "express";
import {skillController} from "../controller/skill.controller";

const router = Router();

router.get("/", skillController.getAll );
router.get("/:id", skillController.getById);
router.post("/",skillController.createNewSkill);
router.put("/:id",skillController.update);
router.delete("/:id",skillController.delete);

export default router;
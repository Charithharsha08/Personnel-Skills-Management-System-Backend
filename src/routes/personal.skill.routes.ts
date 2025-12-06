import {Router} from "express";
import {PersonalSkillController} from "../controller/personal.skill.controller";

const router = Router();

router.get("/", PersonalSkillController.getAllPersonalSkills);
router.get("/:id", PersonalSkillController.getSkillById);
router.post("/",PersonalSkillController.addSkill);
router.put("/:id", PersonalSkillController.updatePersonalSkill);
router.delete("/:id",PersonalSkillController.deletePersonalSkill);

export default router;
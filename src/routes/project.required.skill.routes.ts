import { Router } from 'express';
import {ProjectRequiredSkillController} from "../controller/project.required.skill.controller";

const router = Router();


router.get("/:id",ProjectRequiredSkillController.getAllProjectRequiredSkills);
router.post("/",ProjectRequiredSkillController.createProjectRequiredSkill);
router.delete("/:projectId/:skillId", ProjectRequiredSkillController.deleteProjectRequiredSkill);
router.put("/:id",ProjectRequiredSkillController.updateProjectRequiredSkill);

export default router;
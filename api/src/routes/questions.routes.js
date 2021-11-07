import { Router } from "express";

const router = Router();

import * as questionsController from "./questions.controller.js";

router.get("/questions", questionsController.getQuestions);
router.get("/questions/:id", questionsController.getOneQuestion);
router.post("/questions", questionsController.createQuestion);
router.put("/questions/:id", questionsController.updateQuestion);
router.delete("/questions/:id", questionsController.deleteQuestion);

export default router;

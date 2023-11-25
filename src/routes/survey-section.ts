import { Router } from "express";
import {
  listActFormSections,
  actFormSectionByIdForm,
  actFormSectionByIdFormFill,
} from "../controllers/SurveySection/list";
import { insertActFormSection } from "../controllers/SurveySection/insert";
import { deleteFormSection } from "../controllers/SurveySection/delete";
import { updateFormSection } from "../controllers/SurveySection/update";

const formsection: Router = Router();
formsection.post("/", insertActFormSection);
formsection.put("/", updateFormSection);
formsection.delete("/:id", deleteFormSection);
formsection.get("/", listActFormSections);
formsection.get("/id_form/:id_form", actFormSectionByIdForm);
formsection.get("/id_form_f/:id_form_f/id_sv/:id_sv",actFormSectionByIdFormFill);
export default formsection;

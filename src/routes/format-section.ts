import { Router } from "express";
import {
  listActFormSections,
  actFormSectionByIdForm,
  actFormSectionByIdFormFill,
} from "../controllers/FormatSection/list";
import { insertActFormSection } from "../controllers/FormatSection/insert";
import { deleteFormSection } from "../controllers/FormatSection/delete";
import { updateFormSection } from "../controllers/FormatSection/update";

const formsection: Router = Router();
formsection.post("/", insertActFormSection);
formsection.put("/", updateFormSection);
formsection.delete("/:id", deleteFormSection);
formsection.get("/", listActFormSections);
formsection.get("/id_form/:id_form", actFormSectionByIdForm);
formsection.get(
  "/id_form_f/:id_form_f/id_version/:id_version",
  actFormSectionByIdFormFill
);
export default formsection;

import { Router } from "express";
import { BeneficiariesController } from "../controllers/BeneficiariesController";

const beneficiariesController = new BeneficiariesController()

const routes = Router({
  caseSensitive: true
})


routes.post('/active', beneficiariesController.getAllUser)

export default routes
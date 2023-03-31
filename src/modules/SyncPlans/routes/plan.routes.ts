import { Router } from "express";
// import { celebrate, Joi, Segments } from "celebrate";
import PlansController from "../controllers/PlansController";
import { paginationPlan } from "../controllers/PaginationFunction";


const plansController = new PlansController()
// const querySchema = Joi.object({
//   cost: Joi.string(),
//   name: Joi.string(),
//   start: Joi.number(),
//   end: Joi.number(),
//   cid: Joi.string()
// })

const router = Router({
  caseSensitive: true
})


router.get('/finish', plansController.updatePlan);
router.get('/paginate', paginationPlan);
router.get('/out', plansController.getShow);

export default router
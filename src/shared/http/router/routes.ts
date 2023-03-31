import { Router } from "express";
import beneficiariesRoutes from "../../../modules/SyncBeneficiaries/routes/beneficiaries.routes";
import planRoutes from "../../../modules/SyncPlans/routes/plan.routes"
import cluster from "node:cluster";
import process from 'node:process';

// import 'express-async-errors';





export const routes = Router()

routes.use(beneficiariesRoutes)

routes.use(planRoutes)
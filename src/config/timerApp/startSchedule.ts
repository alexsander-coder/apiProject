import cron from 'node-cron';
import updatePlan from "../../modules/SyncPlans/controllers/PlansController";
import PlansController from '../../modules/SyncPlans/controllers/PlansController';

const received = new PlansController()

export default async function startSchedule() {
  cron.schedule("* * * * *", async () => await received.updatePlan(undefined, undefined))
}
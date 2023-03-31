// import 'reflect-metadata';
import app from './app';
import { AppDataSource } from './db';
import startSchedule from '../../config/timerApp/startSchedule';


export async function main() {
    await AppDataSource.initialize();
    app.listen(process.env.PORT)
}
main()


// starta o schedule
// startSchedule()

// cron.schedule("* * * * *", async () => await updateDataDiffere());
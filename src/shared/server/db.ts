// import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Plan } from '../../modules/SyncPlans/entities/Plans';
import { Beneficio } from '../../modules/SyncBeneficiaries/entities/Beneficios';
import dotenv from "dotenv";

dotenv.config();


export const AppDataSource = new DataSource({
  type: 'oracle',
  host: process.env.OR_HOST,
  username: process.env.OR_USER,
  password: process.env.OR_PASSWORD,
  port: 1521,
  synchronize: false,
  sid: process.env.OR_SID,
  schema: process.env.OR_SCHEMA,
  logging: ["query"],
  entities: [Plan, Beneficio],
  // logger: 'file'
})
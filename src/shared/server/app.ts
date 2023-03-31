import "reflect-metadata";
import express from 'express';
import moment from 'moment';
import bodyParser from 'body-parser';
import detail from 'morgan';
import cors from 'cors';
import { routes } from '../http/router/routes';
import * as dotenv from 'dotenv';
import morganBody from 'morgan-body';
import fs from 'fs';
import path from 'path';
// import configHelmet from '../../config/helmetHeaders/helmetConfig';
import oracledb from 'oracledb'


export const app = express();



app.disable('X-Powered-By');

app.use(detail('combined'));
app.use(detail('dev', {
  skip: function (req, res) { return res.statusCode < 400 }
}));

const log = fs.createWriteStream(
  path.join(__dirname, "./logs", `DATA - ${moment().format('YYYY-MM-DD')}.log`), { flags: "a" }
);

morganBody(app, {
  noColors: true,
  stream: log,
});


app.use(bodyParser.json());
app.use(express.json())
// app.use(configHelmet)
app.use(routes)
// app.use(errors())
app.use(cors())



// morganBody(app);
dotenv.config();

//conectBase
oracledb.initOracleClient({ libDir: process.env.OR_PATH });


export default app;
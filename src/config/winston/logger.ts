import * as path from 'path'
import winston from "winston";


export const logsDirectory = path.join(__dirname, 'logs');

export let logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.File({ filename: path.join(logsDirectory, 'error.log'), level: 'error' }),
    new winston.transports.File({ filename: path.join(logsDirectory, 'info.log'), level: 'info' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}
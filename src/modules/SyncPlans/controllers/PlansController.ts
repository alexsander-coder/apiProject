import { Request, Response } from 'express';
import fetch from 'cross-fetch';
import { AppDataSource } from '../../../shared/server/db';
import { Plan } from '../entities/Plans';
import { detailsDiffere } from '../repositories/customQuery';
import { logger } from '../../../config/winston/logger';
import AppError from '../../../shared/error/AppError'


interface IRequest {
    //nao modificada
    readonly cost: number;
    readonly name: string;
    readonly start: number;
    readonly end: number;
    readonly cid: string;
}

export default class PlansController {

    public async updatePlan(req: Request, res: Response): Promise<Plan | unknown> {

        try {

            const response = await fetch('https://api.onze.vip/app/api/client/packages');


            const packagesExternal = (await response.json()) as { dados: IRequest[] };

            const Plans: IRequest[] = packagesExternal.dados;

            const myData = AppDataSource.getRepository(Plan);

            const newData = [];


            // carrega todos os nomes dos Plans em packagesExternal para um conjunto
            // https://stackoverflow.com/questions/75685246/windbt-wizhttphttp-user-request

            //new Set incompativel com IE8
            const packageNames = new Set(Plans.map((p) => p.name));

            for (const data of Plans) {

                const dataDifference = (await detailsDiffere.findByPackage(data.name)) ?? new Plan();

                dataDifference.cost = data.cost;
                dataDifference.name = data.name;
                dataDifference.start = data.start;
                dataDifference.end = data.end;
                dataDifference.cid = JSON.stringify(data);
                newData.push(dataDifference);
            }

            await myData.save(newData);


            const inactiveData: Plan[] = [];

            // percorre myData e verifica se existe em packagesExternal
            for (const existingData of await myData.find()) {
                if (!packageNames.has(existingData.name)) {
                    inactiveData.push(existingData);
                }
            }

            // atualiza o nome dos objetos em inactiveData
            for (const data of inactiveData) {
                if (!data.name.includes('- INACTIVE')) {

                    data.name = `INACTIVE`;
                    await myData.save(data);
                }
            }

            // const users = await Plan
            //     .createQueryBuilder()
            //     .getOne()

            // console.log(users, 'heel')

            const details = await Plan.find()


            logger.info('tudo ok');
            //retorna erro no Schedule
            // return res.send(details);
            return 'AllUpdate'

        } catch (error) {

            logger.error(error);
            // res.status(500)
            throw new AppError('Erro ao atualizar')
        }
    };

    //somente teste
    public async getShow(req: Request, res: Response) {
        const response = await Plan.find();
        console.log(response);

        const firstUser = await Plan
            .getRepository()
            .createQueryBuilder("user")
            .where("user.ID_PLANO_CLUB = :ID_PLANO_CLUB", { ID_PLANO_CLUB: 77871 })
            .getOne()

        // res.send(firstUser)
    }
}
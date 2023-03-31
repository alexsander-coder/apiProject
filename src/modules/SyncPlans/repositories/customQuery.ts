import { AppDataSource } from '../../../shared/server/db'
import { Plan } from '../entities/Plans'

// let flo = AppDataSource.getRepository(Plan);

// const finish = await Plan
// flo
//   .createQueryBuilder('data')
//   .where("data.name = :name", { name })
//   .getOne()
// console.log(finish);

export const detailsDiffere = AppDataSource.getRepository(Plan).extend({

  findByPackage(name: string) {
    return this.createQueryBuilder("data")
      .where("data.name = :name", { name })
      .getOne()
  }
})


// interface IRequest {
//   //read evita que a propriedade seja modificada
//   readonly cost: number;
//   readonly name: string;
//   readonly start: number;
//   readonly end: number;
//   readonly cid: string;
// }


// export const updatePlan = async (req: Request, res: Response) => {

//   try {
//     const response = await fetch('https://api.onze.vip/app/api/client/packages');
//     const packagesExternal = (await response.json()) as { dados: IRequest[] };

//     const Plans: IRequest[] = packagesExternal.dados;

//     const myData = AppDataSource.getRepository(Plan);
//     const newData: Plan[] = [];


//     // carrega todos os nomes dos Plans em packagesExternal para um conjunto
//     // https://stackoverflow.com/questions/75685246/windbt-wizhttphttp-user-request
//     const packageNames = new Set(Plans.map((p) => p.name));

//     for (const data of Plans) {
//       const dataDifference = (await detailsDiffere.findByPackage(data.name)) ?? new Plan();
//       dataDifference.cost = data.cost;
//       dataDifference.name = data.name;
//       dataDifference.start = data.start;
//       dataDifference.end = data.end;
//       dataDifference.cid = JSON.stringify(data);
//       newData.push(dataDifference);
//     }

//     await myData.save(newData);


//     // armazenar objetos em myData que não existem em packagesExternal
//     const inactiveData: Plan[] = [];

//     // percorrer todos os objetos em myData e verifica se existe em packagesExternal
//     for (const existingData of await myData.find()) {
//       if (!packageNames.has(existingData.name)) {
//         inactiveData.push(existingData);
//       }
//     }

//     // atualiza o nome dos objetos em inactiveData
//     for (const data of inactiveData) {
//       if (!data.name.includes('- INACTIVE')) {
//         data.name = `${data.name} - INACTIVE`;
//         await myData.save(data);
//         data
//       }
//     }

//     let getAllPlan = await Plan.find()

//     logger.info('tudo ok');
//     return res.status(200).send(getAllPlan);

//   } catch (error) {

//     logger.error(error);
//     res.status(500).send('Erro ao atualizar dados');
//   }
// };
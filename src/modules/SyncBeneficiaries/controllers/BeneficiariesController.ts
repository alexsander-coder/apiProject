import { Response, Request } from 'express'
import { Beneficio } from '../entities/Beneficios';
import fetch from 'cross-fetch';


interface IRequest {
  nome: string,
  cpf: string,
  data_nasc: Date,
  email: string,
  plano: string,
  vigencia: string,
  grupo: string
}

export class BeneficiariesController {

  public async getAllUser(req: Request, res: Response): Promise<any> {

    const getAll: IRequest[] = await Beneficio.find()

    //https://api.onze.vip/app/api/client/update/list
    await fetch('http://localhost:3000/dados', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ getAll })

    })
      .then((response) => response.json())
      .then((dat) => {
        res.send('success')
      })
      .catch((err) => console.log(err))
  }
}

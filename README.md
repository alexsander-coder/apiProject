# Club De Vantagens 

## Pré-requisitos
- Node.js
- Express
- TypeORM
- TypeScript
- Oracle Instant Client

## Instalação

Navegue até o diretório do projeto:

```bash
npm install
```
```
Crie um arquivo .env e preencha com
as informações necessárias 
```
```
Configure o Oracle Instant Client.
Dentro do .env coloque o caminho 
do Instant Client
```

## Rodando a aplicação
```
yarn dev
```
## Rotas
Beneficiários
```
router.post('/active',
beneficiariesController.getAllUser)
```

Planos
```
router.get('/finish',
plansControlller.updatePlan);
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

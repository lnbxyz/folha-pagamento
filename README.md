# Folha de Pagamento

## Projeto A

### Utilização

```
cd projeto-a
npm start
```

O projeto será inicializado na URL `http://localhost:3000/`.

### Endpoints

`POST /folha/cadastrar`

Cadastra folha no seguinte schema:

```
{
  "mes": 1,
  "ano": 2023,
  "horas": 160,
  "valor": 50,
  "funcionario": {
    "nome": "Ana Banana",
    "cpf": "794.357.637-34"
  }
}
```

`GET /folha/calcular`

Calcula todas as folhas cadastradas (que ainda não foram calculadas) e registra na aplicação B.

## Projeto B

### Utilização

```
cd projeto-b
npm start
```

O projeto será inicializado na URL `http://localhost:3001/`.

### Endpoints

`GET /folha/listar`

Lista todas as folhas calculadas, com o salário líquido.

`POST /folha/registrar`

Utilizado pela aplicação A. Cadastra folhas calculadas no seguinte schema:

```
{
  "mes": 1,
  "ano": 2023,
  "horas": 160,
  "valor": 50,
  "bruto": 8000,
  "irrf": 542,
  "inss": 345,
  "fgts": 234,
  "funcionario": {
		"nome": "Ana Banana",
		"cpf": "794.357.637-34"
  }
}

```

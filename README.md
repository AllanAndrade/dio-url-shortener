# Encurtador de URL em Node.Js (TypeScript)

## Motivação

Projeto para o Bootcamp "Spread Fullstack Developer" módulo "NodeJs"

## Funcionamento

Possui basicamente duas rotas, uma para encurtar uma URL e outra para redirecionar uma URL encurtada para a sua URL original.

## Requisitos

- Node.Js (feito usando a versão 16.15.0)
- NPM (feito usando a versão 8.8.0)
- Docker (feito usando a versão 20.10.14)
- Docker Compose (feito usando a versão 1.29.2)

## Arquitetura

- A persistência dos dados foi implementada utilizando o padrão `Strategy`, que nessa implementação nos permite alterar o banco de dados apenas informando na configuração qual o SGBD (Sistema Gerenciador de Banco de Dados) desejado, sem alterar qualquer arquivo no resto do projeto. Caso ainda não tenha sido criada uma estratégia para o SGBD desejado, basta criá-la e informar o nome da mesma no arquivo de configuração, sem qualquer alteração no resto do código.

## Como usar

Execute os comandos abaixo na ordem em que se encontram:

- `git clone git@github.com:AllanAndrade/dio-url-shortener.git`
- `cd dio-url-shortener`
- `npm ci`
- `npm start`

## Para encurtar uma URL

Faça um POST em: http://localhost:9000/shortener passando no BODY um JSON contendo o parâmetro "url_original" que é a URL a ser encurtada.

Exemplo:

```
{
	"url_original": "https://www.google.com/maps/search/Restaurantes/@-13.0037956,-38.5328562,20z/data=!4m7!2m6!3m5!2sPraia+do+Porto+da+Barra!3s0x71603840266d747:0xf1f0984f49d41950!4m2!1d-38.5328688!2d-13.003306"
}
```

O retorno esperado é um JSON contendo as propriedades: "id", "url_original" (mesma que foi enviada) e "url_reduzida" (que é a URL encurtada).

Exemplo:

```
{
	"id": "62a390d97cea8e1d3d91e327",
    "url_original": "https://www.google.com/maps/search/Restaurantes/@-13.0037956,-38.5328562,20z/data=!4m7!2m6!3m5!2sPraia+do+Porto+da+Barra!3s0x71603840266d747:0xf1f0984f49d41950!4m2!1d-38.5328688!2d-13.003306",
   	"url_reduzida": "http://localhost:9000/62a390d97cea8e1d3d91e327"
}
```

## Para redirecionar uma URL REDUZIDA para a sua URL ORIGINAL

Faça um GET para a URL http://localhost:9000/<ID>

Onde `<ID>` deve ser substituído pelo valor do ID retornado pela rota de REDUZIR URL.

Exemplo considerando o retorno do exempo anterior:

URL: http://localhost:9000/62a390d97cea8e1d3d91e327

Logo, acessando a url acima, é esperado que a página seja redirecionada para a URL ORIGINAL.

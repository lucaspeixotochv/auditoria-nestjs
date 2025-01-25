# Microserviço de Auditoria

Este projeto é um microserviço de auditoria desenvolvido utilizando NestJS, MySQL e RabbitMQ. Ele permite a criação e consulta de registros de auditoria, além de receber notificações via RabbitMQ.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

### `audit/`

Contém o código do microserviço de auditoria, incluindo controladores, serviços, entidades e DTOs.

### `docker/`

Contém o arquivo `docker-compose.yml` para configurar os serviços do MySQL e RabbitMQ.

## Tecnologias Utilizadas

- **NestJS**: Framework para construção de aplicações Node.js escaláveis.
- **MySQL**: Banco de dados relacional utilizado para armazenar os registros de auditoria.
- **RabbitMQ**: Broker de mensagens utilizado para receber notificações de auditoria.

## Configuração e Execução

### Pré-requisitos

- Docker e Docker Compose instalados.

### Passos para execução

1. Clone o repositório:

```sh
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
```

2. Configure as variáveis de ambiente no arquivo .env baseado no .env.example.

3. Suba os serviços Docker:

```sh
docker-compose up -d
```

4. Instale as dependências e inicie o microserviço:

```sh
cd audit
pnpm install
pnpm start:dev
```

Contribuição
Sinta-se à vontade para contribuir com o projeto através de pull requests.

Licença
Este projeto está licenciado sob a licença MIT.

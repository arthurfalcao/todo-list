# todo-list/api

### :rocket: Technology

- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Docker](https://www.docker.com/)
- [Postgres](https://www.postgresql.org/)

### 🖐 Prerequisites

- [Node.js (LTS)](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Yarn](https://classic.yarnpkg.com/lang/en/)

### :notebook: Running the project

```bash
# Install dependencies
$ yarn install

# Run required services
$ docker-compose up

# Create database
$ yarn sequelize db:create

# Run the migrations
$ yarn sequelize db:migrate

# Start the server
$ yarn dev
```

# Planet FM
A UI front-end for facilities management system Planet FM using a node app with the gov uk front end toolkit.


## Getting started
The easiest way to get started is to use docker compose to download and run the three required containers.

`docker-compose pull`

`docker-compose up`

for detailed instructions see `https://dsdmoj.atlassian.net/wiki/spaces/NFS/overview`

### Runing the app for development**

#### Build assets
`npm run build`

Install dependencies using `npm install` ensure you are using >= `Node v10.15.3`

#### Env variables
In config.js you can see all the required variables. These are set with defaults that will allow the application to run, but you will need to add a `.env` file at some point.

`npm run start`

### Run linter

`npm run lint`

### Run tests

`npm run test`

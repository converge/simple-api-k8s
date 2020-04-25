# thsi is not customized for production yet
FROM node:14-alpine

WORKDIR /opt/backend

COPY . ./

RUN npm i && npm run build

CMD npm run start

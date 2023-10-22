FROM node:18

WORKDIR /app
COPY ./ /app/

RUN npm ci

COPY . .

CMD [ "node", "./bin/www" ]
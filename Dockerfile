FROM node:18

WORKDIR /app
COPY ./ /app/

RUN npm ci

COPY . .
EXPOSE 3000

CMD [ "node", "./bin/www" ]
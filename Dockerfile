FROM node:20.10.0-alpine

WORKDIR /app/

RUN mkdir -p /app/

COPY . /app/

RUN yarn cache clean \ 
    rm node_modules/ \
    yarn install --frozen-lockfile \
    yarn build

COPY . .

EXPOSE 3000

CMD ["yarn", "start:dev"]
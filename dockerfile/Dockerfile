FROM mysql:8.4.4 as mysql
# aptを使用する為にslimイメージを使用
FROM node:lts-buster-slim as base

RUN apt-get update && apt-get install -y \
  procps openssl \
  vim

WORKDIR /app
COPY package*.json yarn.lock

RUN mkdir /var/log/mysql
RUN chown -R node:node /var/log/mysql

COPY . .
RUN npm install --unsafe-perm
RUN yarn add prisma --dev
RUN yarn add @prisma/client
# prismaの初期設定後に以下一文を追加する(prisma/clientの生成)
# RUN npx prisma init
RUN npx prisma generate
RUN yarn install

EXPOSE 5173

CMD ["yarn", "run", "dev"]
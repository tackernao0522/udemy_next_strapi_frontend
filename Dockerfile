FROM node:16.13.1-alpine

ARG WORKDIR
# ARG API_URL

ENV HOME=/${WORKDIR} \
  LANG=C.UTF-8 \
  TZ=Asia/Tokyo \
  HOST=0.0.0.0
  # API_URL="http://localhost:1337/graphql"

WORKDIR ${HOME}

# ローカル上のpackageをコンテナにコピーしてインストールする
COPY package*.json ./
RUN yarn install


# コンテナにNextプロジェクトをコピー
COPY . ./

# RUN yarn build

FROM node:16-alpine

WORKDIR /frontend-react

COPY package.json /frontend-react/package.json
COPY package-lock.json /frontend-react/package-lock.json

RUN npm ci

COPY . /frontend-react

ENV CI=true
ENV PORT=3000

CMD ["npm", "start"]
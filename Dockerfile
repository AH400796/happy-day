FROM node

WORKDIR /happy_day

COPY package.json /happy_day

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start"]
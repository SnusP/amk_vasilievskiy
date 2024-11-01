FROM node:20

WORKDIR /back
    
COPY package*.json ./
RUN npm cache clean --force && npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]

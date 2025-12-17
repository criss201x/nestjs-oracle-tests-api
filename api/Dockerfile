FROM node:20-slim

# Instalar dependencias para Oracle Instant Client
RUN apt-get update && apt-get install -y libaio1 wget unzip && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
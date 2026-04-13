FROM node:20

WORKDIR /app

COPY package*.json ./

# Install build tools + force sqlite3 build from source
RUN apt-get update && apt-get install -y python3 make g++ \
 && npm install --build-from-source

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
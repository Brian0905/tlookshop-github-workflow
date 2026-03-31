FROM node:20

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps --include=optional
COPY . .

EXPOSE 5000
CMD ["npm", "start"]
# Install dependencies and build Next.js app
FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]

# FROM node:18-alpine

# WORKDIR /app

# COPY package.json package-lock.json* ./
# RUN npm install

# # Do not copy the rest of the files here; let the volume mount handle it in dev

# EXPOSE 3000
# CMD ["npm", "run", "dev"]
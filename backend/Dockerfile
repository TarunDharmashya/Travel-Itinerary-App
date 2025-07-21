FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

# Set environment variable for port (optional but helpful)
ENV PORT=8080

EXPOSE 8080

CMD ["node", "src/app.js"]

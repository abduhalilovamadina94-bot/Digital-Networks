FROM node:20-alpine
WORKDIR /app
COPY package.json ./
COPY server.js ./
COPY public ./public
COPY STARTUP_PLAN_UZ.md ./
EXPOSE 5177
CMD ["node", "server.js"]

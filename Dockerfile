FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist/gamerz/browser /app/www

EXPOSE 80
CMD ["serve", "-s", "/app/www", "-l", "80"]

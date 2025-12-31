# Stage 1: Build the application
FROM node:22 AS build-env
WORKDIR /app
COPY package.json server.js ./
RUN npm install --production
COPY . .

# Stage 2: Final minimal distroless image
FROM gcr.io/distroless/nodejs22
COPY --from=build-env /app /app
WORKDIR /app
CMD ["server.js"]


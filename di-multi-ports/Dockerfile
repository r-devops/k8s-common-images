FROM        node:22
WORKDIR     /app
COPY        package.json index.js ./
RUN         npm install
EXPOSE      3000
EXPOSE      4000
ENTRYPOINT  ["node", "index.js"]


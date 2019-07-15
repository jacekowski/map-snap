FROM node:11
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

EXPOSE 8080

ENV AWS_ACCESS_KEY_ID="U375SCB67RG0ZT6MHTJ3"
ENV AWS_S3_SECRET_ACCESS_KEY="aX4uSeZxr84QJope4w9heLzWX392yePXgmUZV7m8"
ENV AWS_BUCKET="arel"
ENV API_KEY="GHI789"
ENV ARELPLANE_ROOT_URL="http://172.17.0.6:3000"
ENV MAPSNAP_ROOT_URL="http://localhost:8080"
ENV AWS_S3_ENDPOINT="http://localhost:9000"
ENV TEMP_STORIES_API_KEY="key"

#RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
#    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
#    && apt-get update \
#    && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst ttf-freefont \
#      --no-install-recommends \
#    && rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get -y install gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget

#RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
#    && mkdir -p /home/pptruser/Downloads \
#    && chown -R pptruser:pptruser /home/pptruser \
#    && chown -R pptruser:pptruser ./node_modules
#USER pptruser


COPY . .

CMD [ "npm", "start" ]

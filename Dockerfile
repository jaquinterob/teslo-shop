FROM node:20

WORKDIR /usr/src/app
RUN groupadd -g 999 docker && usermod -aG docker jenkins
COPY . .
RUN npm install --production
RUN npm run build
CMD ['npm'.'start']
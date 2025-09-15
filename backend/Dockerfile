from node:18-alpine
workdir \app
copy package*.json ./
run npm install
copy . .
expose 4000
cmd ["node","server.js"] 



                                               

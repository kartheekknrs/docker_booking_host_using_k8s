from node:18
workdir \app
copy package*.json ./
run npm install
copy . .
expose 5174
cmd ["npm","run","dev"]
                      

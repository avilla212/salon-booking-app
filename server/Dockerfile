# server/Dcokerfile

# 1. use official node image
FROM node:18

# 2. set working dir
WORKDIR /app

# 3. Install dependencies
COPY package*.json ./

# 4. Install node dependencies
RUN npm install

# 5. Copy source code
COPY . .

# 6. Expose port
EXPOSE 3000

# 7. Start the application (use CMD for default container command)
CMD ["node", "server.js"]



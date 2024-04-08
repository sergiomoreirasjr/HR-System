# Use Node.js as base image
FROM node:alpine as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

# Production environment
FROM nginx:alpine

# Copy build files to nginx public directory
COPY --from=builder /app/build /usr/share/nginx/html

# Adicionar os comandos abaixo ao final do seu Dockerfile
COPY ./sql/schema.sql /docker-entrypoint-initdb.d/schema.sql

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]

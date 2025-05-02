# Step 1: Use official Node.js image to build app
FROM node:16 AS build

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Step 4: Copy all files and build the app
COPY . ./
RUN npm run build

# Step 5: Use nginx to serve the React app
FROM nginx:alpine

# Step 6: Copy the build folder to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Step 7: Expose port 80
EXPOSE 80

# Step 8: Start nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]

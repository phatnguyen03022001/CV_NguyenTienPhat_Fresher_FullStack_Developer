# Sử dụng Node.js để build React app
FROM node:18 AS build
WORKDIR /app

# Copy package.json và cài đặt dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Build ứng dụng
RUN npm run build

# Sử dụng Nginx để chạy ứng dụng
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Mở cổng 80 để chạy ứng dụng
EXPOSE 80

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]

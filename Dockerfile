FROM nginx:alpine
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY build /usr/share/nginx/html
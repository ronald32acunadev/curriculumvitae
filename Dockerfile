# Etapa 1: Compilación de la aplicación
FROM node:22-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias e instalar
COPY package.json package-lock.json ./
RUN npm ci

# Copiar el código fuente y compilar
COPY . .
RUN npm run build

# Etapa 2: Servidor Nginx ligero para producción
FROM nginx:alpine

# Eliminar los archivos estáticos predeterminados de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar la salida compilada de la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto estándar HTTP
EXPOSE 80

# Iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]

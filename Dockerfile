##########################################################################################
# 建構 Build 的階段
##########################################################################################
FROM node:18-alpine AS build

# 切換到镜像中的指定路径
WORKDIR /usr/src/app

# 從Host現在目錄複製到目前镜像中現在目錄/usr/src/app
COPY --chown=node:node . .

# 使用 npm ci，而不是npm install安裝應用程序依賴項
RUN npm ci

# 執行建構命令
RUN npm run build
 
USER node

# 使用 Node 啟動服務
CMD [ "node", "dist/main.js" ]


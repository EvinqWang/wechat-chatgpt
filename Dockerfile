FROM 1329778364/node19evinq:v1

USER root
LABEL name="wechat-chatgpt-evinq" 
LABEL version="1.0"

# 创建app目录
RUN mkdir -p /usr/src/node-app/

# 设置工作目录
WORKDIR /usr/src/node-app/

COPY package.json /usr/src/node-app/package.json

# 安装npm依赖(使用淘宝的镜像源)
# 如果使用的境外服务器，无需使用淘宝的镜像源，即改为`RUN npm i`。
RUN npm i --needlock --registry=https://registry.npm.taobao.org

# 拷贝所有源代码到工作目录
COPY . /usr/src/node-app

# 暴露容器端口
# EXPOSE 7000

# 启动node应用
CMD npm run dev:telegrameOpenai

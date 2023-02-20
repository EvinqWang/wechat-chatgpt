
echo "开始构建docker"

echo $1

pwd

which node
# 生成镜像
# docker build -t node/egg-server .

# imageids=`docker images | grep 'none' | awk '{print $3}'`
# if docker images | grep 'none' | awk '{print $3}'; then 
#   echo "删除名为none的image"
#   docker rmi $imageids
# fi 
                                      
# # echo "启动容器"
# containerid=`docker ps -a | grep 'egg-server-container' | awk '{print $1}'`;
# if [ "$containerid" ];
# then
#     echo "停止正在运行的容器:" $containerid
#     docker stop  $containerid
#     docker rm  $containerid
# fi

# docker run -d --name egg-server-container -p 7000:7000 node/egg-server

# containid=`docker ps | grep 'egg-server-container' | awk '{print $1}'`
# echo '启动容器成功，容器id:' $containid
#  "cd $deploy_path && export TAG=$CI_COMMIT_REF_NAME && docker-compose -f docker-compose.yml build && docker-compose -f docker-compose.yml up -d"
ssh -t 54.218.78.22 && which node
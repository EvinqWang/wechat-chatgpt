- openai token申请 https://platform.openai.com/docs/quickstart/build-your-application
-

##  gitla-runner 实现远程部署
- https://cloud.tencent.com/developer/article/1711774
```
- 进入 gitlaab-runner 容器
- 切换用户 su gitlab-runner切换到gitlab-runner账
- 在 runner中  ssh-keygen -t rsa 生成pub 
- 将 pub文件拷贝到  远程部署机上。
    - 远程部署机上同样需要创建gitlab-runner用户，
    - 将pub文件拷贝到 部署机的 用户 gitlab-runner 的 .ssh/authorized_keys 文件中。
- 参考 https://cloud.tencent.com/developer/article/1711774
- 然后在gitlab-runner容器中就可以通过ssh实现链接

```

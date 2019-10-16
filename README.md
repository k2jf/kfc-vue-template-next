# vue-base-template
Helping to start a vue with iview project, including some standards which have been picked up with agreement within our team.

see ChangeLog [here](./CHANGELOG.md).

# 使用说明
```
#环境要求：
#npm 3或以上版本
#git 1.8或以上版本

#从项目repo里下载代码（有可能是一个空目录，也有可能是已经开发一半的项目）
git clone git@github.com:k2jf/kfc-demo.git project1
cd project1

#从组件库repo里下载框架代码（用--allow-unrelated-histories强制下载非当前repo里的代码到当前目录）
#由于框架代码在项目根目录下，因此我们让这些代码下载后关联到项目repo而不再是框架组件的repo
#下载后仍然可以pull框架代码，但不可以再push（会加入不必要的代码）
#注意：如果项目里已经包含了框架代码，则不要执行此步骤
git pull --allow-unrelated-histories git@github.com:k2jf/kfc-vue-template.git master

#从组件库里下载每个组件代码，-P参数指定组件在项目里所在的目录
#并按每个组件README文件集成到项目
#注意：如果项目里已经包含了所需组件代码，则不要执行此步骤
git remote add -f kfc-timeseries-chart git@github.com:k2jf/kfc-timeseries-chart.git
git subtree add -P src/components/kfc-timeseries-chart kfc-timeseries-chart master --squash

#检查一下当前已连接的各个远程库
git remote -vv

#验证代码是否能正常启动
#启动后可通过浏览器访问，默认地址http://localhost:8080
npm install
npm run xxx.js
npm run serve

#开发代码，其中可能修改项目代码，也可能修改组件代码...（此处省略10000字）

#提交代码，组件代码也会进入项目repo
git add .
git commit -m "..."
git push origin branch1

#若项目需要使用新版本组件（假设新版本分支名为"v2.0"）
#若有冲突，需要手工解决
git subtree pull -P src/components/kfc-timeseries-chart kfc-timeseries-chart v2.0 --squash

#若需要将组件定制代码推送到组件库
#先执行下面的命令，然后提交一个PR给组件管理员审核，后者决定是否合并到master
git subtree push -P src/components/kfc-timeseries-chart kfc-timeseries-chart branch1


```

# kfc.sh工具

这个脚本工具用于简化书写git subtree命令，因为后者比较长而且需要重复书写组件名称。
脚本使用方法如下：
```bash
./kfc.sh add <component> <branch>
相当于：
git remote add -f <component> git@github.com:k2jf/<component>.git
git subtree add -P src/components/<component> <component> <branch>

./kfc.sh pull <component> <branch>
相当于：
git subtree pull -P src/components/<component> <component> <branch>

./kfc.sh push <component> <branch>
相当于：
git subtree push -P src/components/<component> <component> <branch>
```

如果是在cygwin环境下使用，请将core.autocrlf配置为input以便脚本能够正确运行：
```bash
git config --global core.autocrlf input
```
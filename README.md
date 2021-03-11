# 1.vue构建多页面应用步骤
## 1.1 文件目录
在src里面新建pages文件夹，在pages文件夹里面新建index和admin文件夹，然后在文件夹里面新建一套单独的文件体系，里面的文件用法写法和单页面应用的写法一致。

![image.png](https://upload-images.jianshu.io/upload_images/24319978-82c12dd99424a139.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 1.2 在vue.config.js中加入：

```js
module.exports = {
  pages: {
    'index': {
      entry: 'src/pages/index/main.js', //index 的入口文件
      filename: 'index.html', //打包之后的命名
      template: 'public/index.html',//依赖的html文件，我都用public的index，也可以定制化开发
      title: '首页page',
    },
    'admin': {
      entry: 'src/pages/admin/main.js',
      filename: 'admin/index.html',
      template: 'public/index.html',//或者 public/admin.html，需要自己手动建admin.html
      title: '管理页page',
    }
},
```
# 2.使用history模式，配置步骤

## 2.1 配置路由
注意base写法
```js
//index 路由配置
export default new VueRouter({
    mode:'history',
    base:'/index/', //注意这里
    routes: routes
})
//admin 路由配置
export default new VueRouter({
    mode:'history',
    base:'/admin/',//注意这里
    routes: routes
})
```

## 2.2 配置nginx
vue项目使用history模式，打包之后，会出现404，所以我们需要后台配合才能够正常访问，这里我使用nginx做例子
```js
server {
    listen 9914;
    server_name localhost;
    root 'F:\ui_code\多页面应用\dist';
    location / {
        index index.html;
        try_files $uri $uri/ /index.html; 
    }
    location /admin {
        index index.html;
        try_files $uri $uri/ /admin/index.html;
    }
}
```

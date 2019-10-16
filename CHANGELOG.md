# Changelog

## 2019-3-8

### Changes
* 将 baseUrl 设置为 `http://localhost:9080/`，可在 `.env.dev` 文件中更改
* 前端不再维护 `K2_KEY`，放在后台维护
* 修复了一个 axios 请求问题

### New features
* 增加接口请求实现，组件内使用 `this.$axios` 发起请求，使用及配置[在这里](./src/libs/kfc-axios/README.md)

### Changes
* 删除 `this.$baseUrl`
* 删除 `localStorage.getItem('k2_key')`


## 2019-3-7

### New features

* `baseUrl` 挂载到 Vue 原型上，在组件中直接使用 `this.$baseUrl` 即可拿到
* `K2_KEY` 暂时存到了 `localStorage` 中，在组件中使用 `localStorage.getItem('k2_key')` 即可拿到

>PS：通常以上两个参数都会封装在接口请求中，因此以上只是暂时方案

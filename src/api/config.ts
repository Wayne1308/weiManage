/*
 * @Author: chenwei
 * @Date: 2022-02-11 12:52:42
 * @LastEditors: chenwei
 * @LastEditTime: 2022-02-11 14:06:21
 * @FilePath: \weiManage\src\api\config.ts
 * @Description: 数据请求配置
 * 
 */

import axios from 'axios';

// 创建axios实例
const instance = axios.create({
    baseURL: 'https://mock.apipost.cn/app/mock/project/3faac30a-a113-479b-939e-8f843b992f5c',
    timeout: 3000,
    // headers: {
    //   post: {
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    //   }
    // }
})

// 请求拦截
instance.interceptors.request.use(config => {
    // 自定义header，可添加项目token
    // if (store.state.app.token) {
    //   config.headers.token = store.state.app.token;
    //   config.headers.timestamp = new Date().getTime();
    // }
    return config;
}, error => {
    return Promise.reject(error);
})


// 响应拦截
instance.interceptors.response.use(response => {
    // const resCode = response.status;
    // if (resCode === 200) {
    //   return Promise.resolve(response);
    // } else {
    //   return Promise.reject(response);
    // }
    return response;
}, error => {
    // const resCode = error.response.status;
    // switch (resCode) {
    //   case 401:
    //     vm.$Message.error(error.response.data.message);
    //     store.commit('logout', this);
    //     store.commit('clearOpenedSubmenu');
    //     // console.log('token-0', store.state.app.token);
    //     router.replace({
    //       name: 'login'
    //     });
    //     break;
    //   case 404:
    //     vm.$Message.error('网络请求不存在');
    //     break;
    //   case 500:
    //     vm.$Message.error('服务器连接错误');
    //     break;
    //   // 其他状态码错误提示
    //   default:
    //     vm.$Message.error(error.response.data.message);
    // }
    return Promise.reject(error);
})

export default instance;


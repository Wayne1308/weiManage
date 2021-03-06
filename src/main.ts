/*
 * @Author: chenwei
 * @Date: 2022-02-10 11:56:12
 * @LastEditors: chenwei
 * @LastEditTime: 2022-02-11 18:15:20
 * @FilePath: \weiManage\src\main.ts
 * @Description: 
 * 
 */
import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'  // 引入router
import store from './store/index'
import Api from './api/index'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'

const app = createApp(App);

for (const name in ElIcons){
	app.component(name,(ElIcons as any)[name])
}

app.use(router).use(store)
app.config.globalProperties.$api = Api;  // 配置全局数据请求

app.mount('#app')

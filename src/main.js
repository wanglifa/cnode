// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'github-markdown-css'
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
Vue.filter('classify',function(value){
    if(value.good === true){
      value = '精华'
    }else if(value.top === true){
      value = '置顶'
    }else if(value.tab === 'share'){
      value = '分享'
    }else if(value.tab === 'ask'){
      value = '问答'
    }else{
      value = '招聘'
    }
    return value;
})
Vue.filter('formDate',function(value){
  if(!value){
    return ''
  }
  var date = new Date(value)
  var time = new Date().getTime() - date.getTime()//现在的时间 - 传入的时间 = 相差的时间（单位：毫秒）
  if(time < 0){
    return ''
  }else if((time / 1000) < 30){
    return '刚刚'
  }else if((time / 1000) < 60){//除以秒如果小于60就说明没到一分钟
    return parseInt(time/1000) + '秒前'
  }else if((time / 60000) < 60){ //除以分小于60，说明在一小时内，所以就是分钟
    return parseInt(time/6000) + '分钟前'
  }else if((time / 3600000) < 24){//除以时，小于24小时在一天内，就是小时
    return parseInt(time/3600000)+ '小时前'
  }else if((time/86400000)< 31){ //除以天，小于31天就属于天
    return parseInt(time/86400000)+ '天前'
  }else if((time/2678400000)<12){//除以月，小于12个月就属于月，大于就属于年
    return parseInt(time/2678400000)+ '个月前'
  }else{
    return parseInt(time/32140800000)+ '年前'
  }
})

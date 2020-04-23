import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$url='https://alumni.swupl.edu.cn/api/'
// 根目录
Vue.prototype.$url_root='https://alumni.swupl.edu.cn'


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

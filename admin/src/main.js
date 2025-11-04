// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ant from 'ant-design-vue';
import "ant-design-vue/dist/antd.css";
import Viser from 'viser-vue' 
import App from './App.vue'

Vue.use(ant);

Vue.use(Viser);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
		
	var auth = localStorage.getItem("auth");

	if(auth && to.path == "/")
	{
		return next("/admin/index");
	}

	if(to.meta.auth)
	{
		if(!auth)
		{
			next("/")

			return;            
		}
	}

	next();
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})

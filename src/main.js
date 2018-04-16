// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import Vue from 'vue';
import App from './App';
import router from './router';

Raven
  .config('https://8f87358ad93d46b08bb35de8657208c6@sentry.io/1189482', {
    release: process.env.RELEASE
  })
  .addPlugin(RavenVue, Vue)
  .install();

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

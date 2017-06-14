// Libs
import { Meteor } from 'meteor/meteor';
import Vue from 'vue';

import VueTracker from 'vue-meteor-tracker';
Vue.use(VueTracker);

import VueMeta from 'vue-meta';
Vue.use(VueMeta);

import router from "./routes.js";

// Main app
import App from '/client/ui/App.vue';

Meteor.startup(() => {
  new Vue({
    router: router.create(),
    render: h => h(App),
  }).$mount('app');
});

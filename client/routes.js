// Import the router
import {RouterFactory, nativeScrollBehavior} from 'meteor/akryum:vue-router2';
import Test from '/client/ui/Test.vue';
import Test2 from '/client/ui/Test2.vue';

// Create router instance
const router = new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior,
});

// // Not found
// import NotFound from '/imports/ui/NotFound.vue';

// Router.configure(router => {
//   router.addRoute({
//     path: '*',
//     component: NotFound,
//   });
// }, -1);

RouterFactory.configure(router => {
  router.addRoute({
    path: '/foo',
    name: "foo",
    component: Test
  });
  router.addRoute({
    path: '/bar',
    name: "bar",
    component: Test2
  });
});

// console.log(VueRouter);

export default router;
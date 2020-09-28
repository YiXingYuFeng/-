'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const Universe = require('qiankun');


module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  Universe.registerMicroApps([
    {
      name: 'vue app',
      entry: { scripts: ['//localhost:7100/main.js'] },
      container: '#yourContainer2',
      activeRule: '/yourActiveRule2',
    },
  ])
  Universe.start()
};

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // blog
  // 新增一个博客
  // 显示博客列表
  // 某篇博客的详情
  // url / 首页  method  get   控制器
  router.get('/', controller.home.index);
  // 显示博客列表，所有的博客都查出来
  router.get('/posts',controller.post.index);
  // 显示某篇博客
  // router.get('/posts/:id');
  router.get('/posts/create',controller.post.new);//controller控制器  post 显示模板  new是一个方法
  router.post('/posts',controller.post.create);
  // router.delete('/posts/:id');
  // router.put('/posts/:id');
  
};

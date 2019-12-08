- egg-init 
  初始化一个项目，
  egg-init blog --type=simple

  npm i egg-view-nunjucks

  config.view = {
    defaultViewEngine:'nunjucks' , //默认的模板引擎
    mapping:{
      '.tpl':'nunjucks'    在view摸板下查找tpl 
    }
  }
Page({
  http(){
    //要去其他网站那数据
    //上云吧 计算能力特别强 前端， 后端合作的
    // console.log('-----')
    wx.cloud.callFunction({
      name:'http'
    })
    .then(res => {
      console.log(res);
    })
  }
})
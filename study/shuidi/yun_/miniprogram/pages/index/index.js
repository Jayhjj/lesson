Page({
  scanCode () {
    wx.scanCode({
      onlyFromCamera: true,
      sacnType: ['barCode'],
      success: res => {// isbn -> 到云里查一下
        let isbn = res.result;
        //委派一朵云去查API
        wx.cloud.callFunction({
          name:'bookinfo',
          data:{
            isbn:isbn
          },
          success: res =>{
            console.log(res.result);
          }
        })
        // wx.showToast({
        //   title: JSON.stringify(res.result),
        //   // icon: 'hhh',
        //   duration: 10000
        // })
      }
    })
  }
})

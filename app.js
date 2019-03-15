//app.js
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    var that = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
    // 登录
    wx.login({
      //授权一般不需要登录，可跟后台登录一起连用
      success: res => {
        // console.log(res)
        if (res.code){
          console.log('登录成功！' + res.errMsg)
        }else{
          console.log('登录失败！' + res.errMsg)
        }
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // wx.request({
          // url: that.globalData.wx_url_1 + res.code + that.globalData.wx_url_2,
          // success: res => {
            // that.globalData.openid = res.data.openid;
          // }
        // })
      }
    })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           console.log(res)
    //           //用户已经授权过
    //           wx.switchTab({
    //             url: '/pages/index/index'
    //           })
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  /**
   * 设置全局变量
   */
  globalData: {
    userInfo: null,
    // openid: 0,
    // wx_url_1: 'https://api.weixin.qq.com/jscode2session?appid=wx2bcfa41e36292868&secret=自己的SECRET&js_code=',
    // wx_url_2: '&grant_type=authorization_code'
  }
})
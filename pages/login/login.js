// pages/login/login.js
//获取应用实例
const app = getApp()

Page({
  data: {
    headpicurl:'http://sowcar.com/t6/692/1553846790x2059272752.jpg',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // if (app.globalData.userInfo) {
          //   console.log(app.globalData.userInfo)
          //   this.setData({
          //     userInfo: app.globalData.userInfo,
          //     hasUserInfo: true
          //   })
          // } else if (that.data.canIUse) {
          //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          //   // 所以此处加入 callback 以防止这种情况
          //   app.userInfoReadyCallback = res => {
          //     this.setData({
          //       userInfo: res.userInfo,
          //       hasUserInfo: true
          //     })
          //   }
          // } else {
          //   // 在没有 open-type=getUserInfo 版本的兼容处理
          //   wx.getUserInfo({
          //     success: res => {
          //       console.log(res)
          //       app.globalData.userInfo = res.userInfo
          //       this.setData({
          //         userInfo: res.userInfo,
          //         hasUserInfo: true
          //       });
          //       wx.switchTab({
          //         url: '/pages/index/index'
          //       })
          //     }
          //   })
          // }
          wx.getUserInfo({
            success: function (res) {
              console.log(res)
              app.globalData.userInfo = res.userInfo
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
              that.setData({
                userInfo: res.userInfo,
                hasUserInfo: true
              });
              //从数据库获取用户信息
              // that.queryUsreInfo();
              //用户已经授权过
              wx.switchTab({
                url: '/pages/index/index'
              })
            },
            fail:function(res){
              console.log(res)
              //第一次调授权
              wx.reLaunch({
                url: '/pages/login/login'
              })
            }
          });
        }
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      //插入登录的用户的相关信息到数据库
      // wx.request({
      //   url: getApp().globalData.urlPath + 'hstc_interface/insert_user',
      //   data: {
      //     openid: getApp().globalData.openid,
      //     nickName: e.detail.userInfo.nickName,
      //     avatarUrl: e.detail.userInfo.avatarUrl,
      //     province: e.detail.userInfo.province,
      //     city: e.detail.userInfo.city
      //   },
      //   header: {
      //     'content-type': 'application/json'
      //   },
      //   success: function (res) {
      //     //从数据库获取用户信息
      //     that.queryUsreInfo();
      //     console.log("插入小程序登录用户信息成功！");
      //   }
      // });
      //授权成功后，跳转进入小程序首页
      wx.switchTab({
        url: '/pages/index/index'
      })
    }else{
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },
  //获取用户信息接口
  // queryUsreInfo: function () {
  //   wx.request({
  //     url: getApp().globalData.urlPath + 'hstc_interface/queryByOpenid',
  //     data: {
  //       openid: getApp().globalData.openid
  //     },
  //     header: {
  //       'content-type': 'application/json'
  //     },
  //     success: function (res) {
  //       console.log(res.data);
  //       getApp().globalData.userInfo = res.data;
  //     }
  //   })
  // },
  getPhoneNumber(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  }
})

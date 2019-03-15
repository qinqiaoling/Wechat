//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    // //懒人的写法 URL过长和传参多的时候比较不美观-----get请求
    // util.appRequest('get', 'https://www.apiopen.top/satinApi?type=1&page=1', {}, (res) => {
    //   console.log(res)
    // }, (err) => {
    //   console.log('请求错误信息：  ' + err.errMsg);
    // });
    // //稍微优雅一点的写法，其实就是多一行代码,但是美观多了，也好维护
    // let url = 'https://www.apiopen.top/satinApi?type=1&page=1';
    // util.appRequest('get', url, {}, (res) => {
    //   console.log(res)
    // }, (err) => {
    //   console.log('请求错误信息：  ' + err.errMsg);
    // });
    //懒人的写法 URL过长和传参多的时候比较不美观----post请求
    // util.appRequest('post', 'https://www.apiopen.top/satinApi', { type: 1, page: 1 }, (res) => {
    //   console.log(res)
    // }, (err) => {
    //   console.log('请求错误信息：  ' + err.errMsg);
    // });

    // //稍微优雅一点的写法，其实就是多一行代码,但是美观多了，也好维护
    // let url = 'https://www.apiopen.top/satinApi';
    // let data = {
    //   type: 1,
    //   page: 1
    // }
    // util.appRequest('post', url, data, (res) => {
    //   console.log(res)
    // }, (err) => {
    //   console.log('请求错误信息：  ' + err.errMsg);
    // });
  }
})

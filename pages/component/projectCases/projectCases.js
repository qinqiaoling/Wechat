// pages/component/projectCases/projectCases.js
const indexs = require('../../../utils/indexs.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    projectCases: []
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    console.log(current);
    const previewimgarray = [];
    for (let i in this.data.projectCases) {
      previewimgarray.push(this.data.projectCases[i].picurl);
    }
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: previewimgarray // 需要预览的图片http链接列表  
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      projectCases: indexs.indexnavdata.projectCases
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
   
  }
})
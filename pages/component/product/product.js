// pages/component/product/product.js
const indexs = require('../../../utils/indexs.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: [],
  },
  previewImage_a: function (e) {
    // 使用event.currentTarget.dataset.自定义属性名称 来获取data - 的值 如event.currentTarget.dataset.src(获取data - src的值)
    const current_a = e.currentTarget.dataset.src;//获取data-src
    console.log(current_a);
    const previewimgarray = [];
    for (let i in this.data.product) {
      previewimgarray.push(this.data.product[i].picurl);
    }
    wx.previewImage({
      current: e.currentTarget.dataset.src, // 当前显示图片的http链接  
      urls: previewimgarray // 需要预览的图片http链接列表  
    })
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      product: indexs.indexnavdata.product
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
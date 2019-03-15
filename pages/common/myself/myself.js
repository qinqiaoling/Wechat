// pages/common/myself/myself.js
const indexs = require('../../../utils/indexs.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my_head_img:'http://thyrsi.com/t6/637/1545204554x2890191781.jpg',
    my_info_title:'富辉不锈钢',
    contact: {
      linkman: '',
      telephone: '',
      address: ''
    },
    rot_line: {
      lxr: '联系人：',
      tel: '电话：',
      adress: '地址：',
      rot_line: '咨询热线:'
    },
    longitude: 113.3656190000,
    latitude: 31.7249830000,
    markers: [{
      iconPath: '../../../image/location_a.png',
      id: 0,
      longitude: 113.3656190000,
      latitude: 31.7249830000,
      width: 30,
      height: 30,
      callout:{
        content:'富辉不锈钢\n湖北省随州市沿河大道环保局斜对面',
        color:'#FF0000',
        fontSize:14,
        textAlign: 'center',
        bgColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#dddddd',
        padding: 6
      },
      label:{
        content:'富辉不锈钢',
        color:'#FF0000DD',
        fontSize:12,
        textAlign:'left',
      }
    }],
    circles:[
      {
        longitude: 113.3656190000,
        latitude: 31.7249830000,
        color: '#FF0000DD',
        fillColor: '#7cb5ec88',
        radius:300,
        strokeWidth:0.5
      }
    ],
    controls: [
      {
        id: 1,
        iconPath: '../../../image/localhost_b.png',
        position: {
          left: 8,
          top: 300 - 55,
          width: 20,
          height: 20
        },
        clickable: true
      },
      {
        id: 2,
        iconPath: '../../../image/localhost_c.png',
        position: {
          left: 38,
          top: 300 - 55,
          width: 20,
          height: 20
        },
        clickable: true
      }
    ]
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
    //获取当前位置
    if (e.controlId==2){
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          const latitude = res.latitude
          const longitude = res.longitude
          const speed = res.speed
          const accuracy = res.accuracy
          console.log(res)
          wx.openLocation({
            longitude: 113.3656190000,
            latitude: 31.7249830000,
            name: '富辉不锈钢',
            address: '湖北省随州市沿河大道环保局斜对面'
          })
        }
      });
    } else if (e.controlId == 1){
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          const latitude = res.latitude
          const longitude = res.longitude
          const speed = res.speed
          const accuracy = res.accuracy
          console.log(res)
        }
      });
    }
  },
  regionchange(e) {
    console.log(e.type)
  },
  my_call: function () {
    wx.makePhoneCall({
      phoneNumber: '134****1219', //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    console.log(current);
    const previewimgarray = [];
    previewimgarray.push(current);
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
      contact: indexs.indexnavdata.contact,
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
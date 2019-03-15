//index.js
//获取应用实例
const app = getApp()
const indexs = require('../../utils/indexs.js')

Page({
  data: {
    version:'',
    versionControl:'',
    timectrl:'',//定时器名称
    headpicurl: 'http://thyrsi.com/t6/637/1545204554x2890191781.jpg',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    indexshow:false,
    background: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    navbar:[],
    product:[],
    newsTrends:[],
    projectCases:[],
    about:[],
    contact: {
      linkman: '',
      telephone: '',
      address: ''
    },
    rot_line:{
      title:'联系我们',
      lxr:'联系人：',
      tel:'电话：',
      adress:'地址：',
      rot_line:'咨询热线:'
    },
    morefont:'更多+',
    navlist_title:{
      navlistone:'产品展示',
      navlisttwo:'新闻资讯',
      navlistthree:'工程案例',
      navlistfour:'关于我们'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  contactus:function(){
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
    const previewimgarray=[];
    for (let i in this.data.background){
      previewimgarray.push(this.data.background[i].picurl);
    }
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: previewimgarray // 需要预览的图片http链接列表  
    })
  }, 
  hideFun: function () {
    //去掉底部tabbar
    wx.hideTabBar();
    // 启用loading
    wx.showLoading({
      title: '加载中',
    });
    //刚加载时页面空白
    this.setData({
      indexshow: false
    });
    // 去掉首页刚加载时的标题
    wx.setNavigationBarTitle({
      title: ''
    });
  },
  showFun: function () {
    wx.hideLoading();//隐藏loading
    wx.showTabBar();//底部tabbar出现
    //设置顶部的导航条标题
    wx.setNavigationBarTitle({
      title: '富辉不锈钢'
    });
    //页面出现数据
    this.setData({
      indexshow: true
    });
    //设置tabbar第一项，从左边起
    wx.setTabBarItem({
      index: 0,
      text: '富辉不锈钢',
      iconPath: 'image/shouye.png',
      selectedIconPath: 'image/shouye_hl.png'
    });
    //设置tabbar第二项，从左边起
    wx.setTabBarItem({
      index: 1,
      text: '联系商家',
      iconPath: 'image/contact.png',
      selectedIconPath: 'image/contact_hl.png'
    });
    //设置底部tabbar上边框颜色
    wx.setTabBarStyle({
      borderStyle: 'black'
    })
  },
  versioncode:function(){
    var that = this;
    wx.hideTabBar();//底部TabBar隐藏
    that.setData({
      versionControl: 1,
      indexshow: false,//首页数据隐藏
      timectrl: setInterval(function(){
        let futuretime = new Date('2019/01/08 00:00:00').getTime();//设置到期时间
        let nowtime = new Date().getTime();//获取当前时间
        nowtime++;
        that.setData({
          versionControl: 0,
          indexshow: false//首页数据隐藏
        });
        wx.hideTabBar();//底部TabBar隐藏
        console.log(nowtime);
        if (nowtime > futuretime) {//当前时间大于设置时间时清除定时器
          clearInterval(that.data.timectrl);//清除定时器
          that.setData({
            versionControl: 1,
            indexshow: true//显示首页数据
          });
          that.showFun();
        }
      },1000)
    });
  },
  onLoad: function () {
    var that = this;
    that.hideFun();
    that.versioncode();
    that.setData({
      background: indexs.indexnavdata.backgrounds,
      navbar: indexs.indexnavdata.navbar,
      product: indexs.indexnavdata.product.slice(0, 4),
      newsTrends: indexs.indexnavdata.newsTrends.slice(0,3),
      projectCases: indexs.indexnavdata.projectCases.slice(0,2),
      about: indexs.indexnavdata.about,
      // contact:indexs.indexnavdata.contact,
      version: indexs.version
    });
    // indexs.vercode()//直接调用indexs.js方法
    // 查看是否授权
    wx.getUserInfo({
      success: function (res) {
        // console.log(res)
        app.globalData.userInfo = res.userInfo
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
        setTimeout(function () {
          //用户已经授权过
          wx.switchTab({
            url: '/pages/index/index'
          });
          that.showFun();
        }, 500)
      },
      fail: function (res) {
        //第一次调授权
        wx.reLaunch({
          url: '/pages/login/login'
        })
      }
    })
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
    let that = this;
    clearInterval(that.data.timectrl);//清除定时器
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    let that = this;
    clearInterval(that.data.timectrl);//清除定时器
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
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})

//获取应用实例
const app = getApp()

// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data:
  {
    welMsg: '欢迎来到你的新世界^~^',
    userInfo: {},
    isLogin: false,
    isVIP: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    adList:[
      {
        title:'已参加活动',
        value:0,
        func:'finishAd',
        icon: '../../res/icon2/甜甜圈.png'
      },
      {
        title: '未完成的活动',
        value: 1,
        func: 'unfinishAd',
        icon: '../../res/icon2/领结.png'
      },
      {
        title: '往期活动',
        value: 2,
        func: 'passAd',
        icon: '../../res/icon2/铃铛.png'
      },
    ],

    courseList: [
      {
        title: '已报名课程',
        value: 3,
        func: 'paidCourse',
        icon: '../../res/icon2/礼物.png'
      },
      {
        title: '正在学习课程',
        value: 4,
        func: 'studyCourse',
        icon: '../../res/icon2/灯泡.png'
      },
      {
        title: '学习过的知识点',
        value: 5,
        func: 'doneKeyPoint',
        icon: '../../res/icon2/圣诞树.png'
      },
      {
        title: '收藏的课程',
        value: 6,
        func: 'loveCourse',
        icon: '../../res/icon2/拐杖.png'
      },
    ],
  },

  //功能项目事件函数
  finishAd: function () {

    if (this.data.isLogin) {

    }
    else {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 700,
      });
    }
  },
  unfinishAd: function () {

    if (this.data.isLogin) {

    }
    else {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 700,
      });
    }
  },
  passAd: function () {

    if (this.data.isLogin) {

    }
    else {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 700,
      });
    }
  },
  paidCourse: function () {

    if (this.data.isLogin) 
    {

    }
    else {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 700,
      });
    }
  },
  studyCourse: function () {

    if (this.data.isLogin) {

    }
    else {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 700,
      });
    }
  },
  doneKeyPoint: function () {

    if (this.data.isLogin) {

    }
    else {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 700,
      });
    }
  },
  loveCourse: function () {

    if (this.data.isLogin) {

    }
    else {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 700,
      });
    }
  },


  pressConfig: function () {

    if (this.data.isLogin) {
      wx.navigateTo({
        url: '../../pages/me/config/config',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
    else {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 700,
      });
    }
  },


  //活动页面测试
  loadFuture: function () {
    wx.navigateTo({
      url: '../../pages/future/future',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  //获取服务器数据
  getServerData: function()
  {

  },

  //登录按钮函数
  login: function (e) 
  {
    console.log('123')
    console.log(e.detail.userInfo)

    //登录未获得授权，失败数据
    if(e.detail.userInfo == null)
    {
      app.globalData.isLogin = false;
      this.setData
        ({
          isLogin: false,
        })
    }
    //登录成功
    else
    {
      app.globalData.userInfo = e.detail.userInfo
      app.globalData.isLogin = true
      
      this.setData
        ({
          userInfo: e.detail.userInfo,
          isLogin: true,
        })
      //app.login();
      //app.getUserInfo();
      wx.showToast({
        title: '登录成功',
        icon: 'succes',
        duration: 1000,
        mask: true
      });

      this.getServerData()
    }


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) 
  {
    this.getUserInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () 
  {
    if (app.globalData.isLogin == false)
    {
      this.setData({
        userInfo: {},
        isLogin: false,
      })
    }
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

  },

  //获取用户数据
  getUserInfo: function () {
    if (app.globalData.isLogin) {
      this.setData({
        userInfo: app.globalData.userInfo,
        isLogin: true
      })
    }
    else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {

        app.globalData.userInfo = res.userInfo
        app.globalData.isLogin = true

        this.setData({
          userInfo: res.userInfo,
          isLogin: true,
        })
      }
    }
    else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          app.globalData.isLogin = true
          this.setData({
            userInfo: res.userInfo,
            isLogin: true,
          })
        }
      })
    }
  },
})
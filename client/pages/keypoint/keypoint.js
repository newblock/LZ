// pages/keypoint/keypoint.js

var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: 
  {
    title: '',
    text: '',
    imgurl: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options)
  {
    //util.showBusy('请求中...')

    console.log("opt",options)
    var list = wx.getStorageSync('artlist')

    console.log("log", options.aid);
    var index = list.length - options.aid;

    this.setData
    ({
      title: list[index].title,
      text: list[index].text,
      imgurl: list[index].imgurl,
    })


/*
    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/arttext`,
      login: false,
      data:{
        aid:options.aid
      },

      success(result) 
      {
        //util.showSuccess('请求成功完成')
        console.log('TEXTRES', result.data.data);
        that.setData({
          title: result.data.data.list[0].title,
          text: result.data.data.list[0].text,
          imgurl: result.data.data.list[0].imgurl,

        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
      
    })
    */
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
  onPullDownRefresh:function()
  {
    wx.stopPullDownRefresh();
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
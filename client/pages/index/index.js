//index.js
//获取应用实例
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: 
  {
    pageStep : 1,
    totalCount: 0,
    itemHeight: 550,
    maxHeigth: 600,
    curCount : 0,
    artList : [],
    startID: 0,
    endID: 2,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) 
  {
    var that = this ;
    wx.request
    ({
      //仅为示例，并非真实的接口地址
      url: config.service.host+'/weapp/dbinfo', //仅为示例，并非真实的接口地址
      header: 
      {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) 
      {
        //console.log("count",res.data)
        that.data.totalCount = res.data.count ;

        //检查数据库是否有问题
        if (that.data.totalCount == 0) {
          console.log("数据库数据为空: tCount == 0")
          return
        }

        qcloud.request
        ({

          url: `${config.service.host}/weapp/arttitle`,
          login: false,
          data:
          {
            start: that.data.startID,
            end: that.data.endID
          },

          success(result) 
          {
            //util.showSuccess('请求成功完成')
            console.log('request', result.data.data);
            
            var list = result.data.data.list;
            
            that.setData
            ({
              artList: list,
              maxHeigth: list.length * that.data.itemHeight
            })
            
            that.data.curCount = list.length;

            wx.setStorageSync('artlist', list)

            console.log("list",list)

          },
          fail(error) {
            util.showModel('请求失败', error);
            console.log('request fail', error);
          }
        })

      }
    })

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () 
  {
    var that = this 
    qcloud.request
      ({

        url: `${config.service.host}/weapp/arttitle`,
        login: false,
        data:
        {
          start: that.data.curCount,
          end: that.data.curCount + that.data.pageStep
        },

        success(result) 
        {
          
          console.log('request', result.data.data);

          if (result.data.data.list.length == 0)
          {
            util.showModel('已经到头啦！', '你已经看到最新的知识啦，更新的区块链知识敬请期待！')
            wx.stopPullDownRefresh()
            return
          }

          var list = result.data.data.list
          console.log("cList", that.data.artList);
          list = list.concat(that.data.artList);
          console.log("list", list);

          that.setData
            ({
              artList: list,
              maxHeigth: list.length * that.data.itemHeight
            })

          that.data.curCount = list.length;
          wx.setStorageSync('artlist', list)

          wx.stopPullDownRefresh();
        },
        fail(error) {
          util.showModel('请求失败', error);
          console.log('request fail', error);
        }
      })
  },

  //进入课程页面
  gotoCourse: function (event) 
  {
    console.log(event)
    wx.navigateTo
    ({
      url: '../../pages/keypoint/keypoint?aid='+event.currentTarget.id,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
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
  onUnload: function () 
  {
    console.log('index---------onUnload')

    wx.setStorageSync('artList', this.data.courseList);
  }

})

//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App
({

    globalData:
    {
      userInfo: null,
      artList : null
    },


    onLaunch: function () 
    {
        qcloud.setLoginUrl(config.service.loginUrl)

        var artList = wx.getStorageSync('artList') || []

        this.globalData.artList = artList

    }


})
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    mottoArr: [],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    title: "ddemo",
    currentIndex: 1,
    oldIndex: 0,
    view: [{ in: "",
        out: ""
      },
      { in: "",
        out: ""
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
 

  showAnimated: function() {
    var t = this;
     1 === this.data.currentIndex && (setTimeout(function() {
      t.setData({
        two_one: "animated fadeInDown",
        two_two: "animated fadeInUp"
      })
    }, 1e3), setTimeout(function() {
      t.setData({
        two_three: "animated zoomIn",
        two_four: "animated zoomIn"
      })
    }, 1200), setTimeout(function() {
      t.setData({
        two_three: "two-music-one",
        two_four: "two-music-two"
      })
    }, 2200))
  },
  cleanAnimated: function() {
    0 === this.data.oldIndex ? this.setData({
      one_one: "animated fadeOut",
      one_two: "animated fadeOut",
      one_three: "animated fadeOut",
      one_four: "animated fadeOut",
      one_five: "animated fadeOut"
    }) : 1 === this.data.oldIndex && this.setData({
      two_one: "animated fadeOut",
      two_two: "animated fadeOut",
      two_three: "animated fadeOut",
      two_four: "animated fadeOut",
      two_five: "animated fadeOut"
    })
  },
  onLoad: function() {


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }


    



    /**生成背景星星-结束 */
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShow: function() {
    this.showAnimated();
    var t = this;
    setTimeout(function() {
      t.setData({
        bottom: "animated slideInUp"
      })
    }, 2e3), setTimeout(function() {
      t.setData({
        bottom_one: "animated slideInUp"
      })
    }, 2100), setTimeout(function() {
      t.setData({
        bottom_two: "animated slideInUp"
      })
    }, 2200), setTimeout(function() {
      t.setData({
        bottom_three: "animated slideInUp"
      })
    }, 2300), setTimeout(function() {
      t.setData({
        bottom_four: "animated slideInUp"
      })
    }, 2400), setTimeout(function() {
      t.setData({
        bottom_one: "bottom-4s-move"
      })
    }, 3100), setTimeout(function() {
      t.setData({
        bottom_two: "bottom-3s-move"
      })
    }, 3200), setTimeout(function() {
      t.setData({
        bottom_three: "bottom-2s-move"
      })
    }, 3300), setTimeout(function() {
      t.setData({
        bottom_four: "bottom-1s-move"
      })
    }, 3400)

  },
  onHide: function() {
    this.cleanAnimated(), this.setData({
      bottom: "",
      bottom_one: "",
      bottom_two: "",
      bottom_three: "",
      bottom_four: ""
    })
  }
})
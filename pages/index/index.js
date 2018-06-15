// //index.js
// //获取应用实例
// const app = getApp()

// Page({
//   data: {
//     motto: 'Hello World',
//     mottoArr:[],
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo'),
//     title: "ddemo",
//     currentIndex: 0,
//     oldIndex: 0,
//     view: [{
//       in: "",
//       out: ""
//     },
//     {
//       in: "",
//       out: ""
//     }
//     ]
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   touchStart: function (t) {
//     this.setData({
//       startX: t.changedTouches[0].clientX
//     })
//   },
//   touchEnd: function (t) {
//     var e = this,
//       n = this.data.view;
//     this.setData({
//       endX: t.changedTouches[0].clientX
//     });
//     var a = t.changedTouches[0].clientX - this.data.startX;
//     if (a < -100) {
//       if (this.data.currentIndex >= 1) return;
//       this.setData({
//         oldIndex: e.data.currentIndex,
//         currentIndex: ++e.data.currentIndex
//       }),
//         n[this.data.oldIndex].out = "animated fadeOutLeft",
//         n[this.data.oldIndex].in = "",
//         n[this.data.currentIndex].in = "animated fadeInRight",
//         n[this.data.currentIndex].out = "",
//         this.setData({
//           view: n
//         }),
//         this.cleanAnimated(), this.showAnimated()
//     } else if (a > 100) {
//       if (this.data.currentIndex <= 0) return;
//       this.setData({
//         oldIndex: e.data.currentIndex,
//         currentIndex: --e.data.currentIndex
//       }),
//         n[this.data.oldIndex].out = "animated fadeOutRight",
//         n[this.data.oldIndex].in = "",
//         n[this.data.currentIndex].in = "animated fadeInLeft",
//         n[this.data.currentIndex].out = "",
//         this.setData({
//           view: n
//         }),
//         this.cleanAnimated(), this.showAnimated()
//     }
//   },
//   showAnimated: function () {
//     var t = this;
//     0 === this.data.currentIndex ? (setTimeout(function () {
//       t.setData({
//         one_one: "animated fadeIn",
//         one_two: "animated bounceIn"
//       })
//     }, 1e3), setTimeout(function () {
//       t.setData({
//         one_three: "animated bounceIn"
//       })
//     }, 1500), setTimeout(function () {
//       t.setData({
//         one_four: "animated bounceIn"
//       })
//     }, 1800), setTimeout(function () {
//       t.setData({
//         one_five: "animated lightSpeedIn"
//       })
//     }, 1900)) : 1 === this.data.currentIndex && (setTimeout(function () {
//       t.setData({
//         two_one: "animated fadeInDown",
//         two_two: "animated fadeInUp"
//       })
//     }, 1e3), setTimeout(function () {
//       t.setData({
//         two_three: "animated zoomIn",
//         two_four: "animated zoomIn"
//       })
//     }, 1200), setTimeout(function () {
//       t.setData({
//         two_three: "two-music-one",
//         two_four: "two-music-two"
//       })
//     }, 2200))
//   },
//   cleanAnimated: function () {
//     0 === this.data.oldIndex ? this.setData({
//       one_one: "animated fadeOut",
//       one_two: "animated fadeOut",
//       one_three: "animated fadeOut",
//       one_four: "animated fadeOut",
//       one_five: "animated fadeOut"
//     }) : 1 === this.data.oldIndex && this.setData({
//       two_one: "animated fadeOut",
//       two_two: "animated fadeOut",
//       two_three: "animated fadeOut",
//       two_four: "animated fadeOut",
//       two_five: "animated fadeOut"
//     })
//   },
//   onLoad: function () {
      
     
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }


   
//     /**生成背景星星-结束 */
//   },
//   onShow:function(){
//     this.showAnimated();
//     var t = this;
//     setTimeout(function () {
//       t.setData({
//         bottom: "animated slideInUp"
//       })
//     }, 2e3), setTimeout(function () {
//       t.setData({
//         bottom_one: "animated slideInUp"
//       })
//     }, 2100), setTimeout(function () {
//       t.setData({
//         bottom_two: "animated slideInUp"
//       })
//     }, 2200), setTimeout(function () {
//       t.setData({
//         bottom_three: "animated slideInUp"
//       })
//     }, 2300), setTimeout(function () {
//       t.setData({
//         bottom_four: "animated slideInUp"
//       })
//     }, 2400), setTimeout(function () {
//       t.setData({
//         bottom_one: "bottom-4s-move"
//       })
//     }, 3100), setTimeout(function () {
//       t.setData({
//         bottom_two: "bottom-3s-move"
//       })
//     }, 3200), setTimeout(function () {
//       t.setData({
//         bottom_three: "bottom-2s-move"
//       })
//     }, 3300), setTimeout(function () {
//       t.setData({
//         bottom_four: "bottom-1s-move"
//       })
//     }, 3400)

//   },
//   onHide:function(){
//     this.cleanAnimated(), this.setData({
//       bottom: "",
//       bottom_one: "",
//       bottom_two: "",
//       bottom_three: "",
//       bottom_four: ""
//     })
//   },

// })

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
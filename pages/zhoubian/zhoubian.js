var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
// 高德地图
var amapFile = require('../../libs/amap-wx.js');
// 高德地图
var myAmapFun = new amapFile.AMapWX({ key: 'aa36667c3e507d1bea9c9762146711b4' });


// 实例化API核心类
qqmapsdk = new QQMapWX({
  key: 'B4MBZ-WJNCU-FMAVE-2YFRH-FO6LZ-MXB4M'
})


// pages/zhoubian/zhoubian.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        haha:"",
        box: [
           
        ],

    },
    // 获取输入框的值
    hahaValue:function(e){
      this.setData({
        haha:e.detail.value
      })
    },
    // 点击确定按钮
    getValue:function(){
      console.log(this.data.haha)
     
      this.search()

    },

    // 拨打电话
    bodadianhua:function(e){
        wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.phonemumber
        })

    },
    // 导航
    daohang:function(e){
        wx.openLocation({
            latitude: e.currentTarget.dataset.weidu,
            longitude: e.currentTarget.dataset.jingdu,
            success: function (res) {
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        wx.showLoading({
          title: '加载中',
        })
         wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          console.log(res)
          that.setData({
            latitude : res.latitude,
            longitude : res.longitude
          })

          // 调用接口
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: that.data.latitude,
              longitude: that.data.longitude
            },
            success: function (res) {
              console.log(res);
              that.setData({
                address: res.result.address
              })
              
              setTimeout(function () {
                wx.hideLoading()
              }, 500)
            },
            fail: function (res) {
              console.log(res);
            },
           
          });
        }
      })

         
       



    },
    dingwei:function(){
      var that = this
     

      wx.chooseLocation({
        success: function (res) {
          console.log(res.address)
          that.setData({
            address: res.address,
            latitude: res.latitude,
            longitude: res.longitude
          })
        }
      })

    },

    search:function(){
      var that = this
      wx.showLoading({
        title: '加载中',
      })
      // 调用接口
      qqmapsdk.search({
        keyword:"菜饭" ,
        // that.data.haha
        location:{
          latitude: that.data.latitude,
          longitude: that.data.longitude
        },
        page_size: 20,
        success: function (res) {
          console.log(res)
          
          if(res.data.length == 0){
            wx.showToast({
              title: '输入点正常的文字谢谢',
              icon: 'none',
              duration: 2000
            })

          }
          res.data.sort(that.compare("_distance"))
          console.log(res.data)
          var box = []
          for (var x in res.data) {
            var msg = {};
            msg.name = res.data[x].title;
            var aaaa = msg.name
            msg.distance = res.data[x]._distance;
            if (msg.distance > 999) {
              msg.distance = (msg.distance * 0.001).toFixed(2) + "Km";
            } else {
              msg.distance = msg.distance + "m"
            }
            msg.address = res.data[x].address;
            msg.category = res.data[x].category;
            msg.telephone = res.data[x].tel;
            if (msg.telephone.length == 1) {
              msg.telephone = 0
            }
            if (msg.telephone.length > 11) {
              var jiequ = msg.telephone
              msg.telephone = String(jiequ).substring(0, 11)
            }
            // 经纬度
            msg.weidu = res.data[x].location.lat;
            msg.jingdu = res.data[x].location.lng;
            box.push(msg);

          }
          that.setData({
            box: box,
          })
          setTimeout(function () {
            wx.hideLoading()
          }, 1000)
        },
        fail: function (res) {
          wx.showToast({
            title: '输入点正常的文字谢谢',
            icon: 'none',
            duration: 2000
          })
        }
      });
    },

    compare: function (prop){
        return function (obj1, obj2) {
          var val1 = obj1[prop];
          var val2 = obj2[prop]; if (val1 < val2) {
            return -1;
          } else if (val1 > val2) {
            return 1;
          } else {
            return 0;
          }
        }
      
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
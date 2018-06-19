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
        box: [
            {
                name: "三江源拉面",
                distance: "1.5KM",
                address: "镇海区福业界12",
                category: "美食：小吃快餐"

            },
            {
                name: "三江源拉面",
                distance: "1.5KM",
                address: "镇海区福业界12",
                category: "美食：小吃快餐"

            },
            {
                name: "三江源拉面",
                distance: "1.5KM",
                address: "镇海区福业界12",
                category: "美食：小吃快餐",
                telephone: 13256256253

            }
        ],
        biaoqian:"美食"

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

        // 调用接口
        qqmapsdk.search({
            keyword: '米饭',
            page_size: 20,
            success: function (res) {
              console.log(res)
                var box = []
                for (var x in res.data) {
                    var msg = {};
                    msg.name = res.data[x].title;
                    var aaaa = msg.name
                    // msg.name =  aaaa.replace('猪', '')
                    msg.distance = res.data[x]._distance;
                    if (msg.distance>999){
                        msg.distance = (msg.distance * 0.001).toFixed(2) + "Km";
                    }else{
                        msg.distance = msg.distance+"m"
                    }
                    msg.address = res.data[x].address;
                    msg.category = res.data[x].category;
                    msg.telephone = res.data[x].tel;
                    if (msg.telephone.length == 1) {
                        msg.telephone = 0
                    }
                    if (msg.telephone.length > 11) {
                        var jiequ = msg.telephone
                        msg.telephone = String(jiequ).substring(0,11)
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
                    title: '您的网络连接错误',
                    icon: 'none',
                    duration: 2000
                })
            }
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
// pages/aboutme/aboutme.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    _num2: true,
    tag: 50,
    // 
    dImgaaa: [
      
        "../../images/2weima.jpg",
    
   
    ]


  },
  chooseTab: function(e) {
    console.log(e.currentTarget.dataset.current)
    var aaa = e.currentTarget.dataset.current
    if (aaa == 1) {
      this.setData({
        _num1: true,
        _num2: false,
        _num3: false,
        _num4: false
      })
    } else if (aaa == 2) {
      this.setData({
        _num2: true,
        _num1: false,
        _num3: false,
        _num4: false
      })

    } else if (aaa == 3) {
      this.setData({
        _num3: true,
        _num1: false,
        _num2: false,
        _num4: false
      })

    } else if (aaa == 4) {
      this.setData({
        _num4: true,
        _num1: false,
        _num3: false,
        _num2: false
      })

    }


  },
  //图片点击事件
  imgYu: function(event) {
   
    var src = event.currentTarget.dataset.src; //获取data-src
    var imgList = event.currentTarget.dataset.list; //获取data-list

    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
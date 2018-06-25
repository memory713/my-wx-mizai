Page({
  data: {
    tanchuang:false,
    haha:''
    
  },
  whichFood:function(){
    wx.navigateTo({
      url: '../zhoubian/zhoubian',
    }) 

  },
  valueInput:function(e){
    this.setData({
      valueInput: e.detail.value
    })
 
  },
  sure:function(){
    var aaa = this.data.valueInput
    if(aaa.length==0){
      wx.showToast({
        title: '输入文字',
        icon: 'none',
        duration: 2000
      })
    } else if ((aaa !== "boss") && (aaa !== "BOSS")){
      this.setData({
        tanchuang: false
      })
    }else{
      wx.navigateTo({
      url: '../aboutme/aboutme',
    }) 

    }
  },
  quxiao:function(){
    this.setData({
      tanchuang: false
    })
  },
  aboutMe:function(){
  this.setData({
    tanchuang:true
  })

    
  },

  onLoad: function() {

  },
  onReady: function() {

  },
  onShow: function() {
    
  },
  onHide: function() {
    
    
  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  }
});

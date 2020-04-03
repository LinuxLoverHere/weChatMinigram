// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '正在加载...',
      duration:3000,
      icon:'loading',
      mask:true
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容，哈哈哈',
      // showCancel:false,
      cancelText:"Exit",
      cancelColor:"red",
      
      success:function(res){
        console.log(res)
        if(res.cancel){
          console.log("用户点击了取消")
        }
        if(res.confirm){
          console.log("用户点击了确定")
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
      mask:true
    })
    setTimeout(()=>{
      // 必须手动hideLoading才会让Loading消失
      wx.hideLoading()
    },3000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ["相册","拍照"],
      itemColor:"red",
      success:function(res){
        console.log(res)
        console.log(res.tapIndex)
        switch(res.tapIndex){
          case 0:break;
          case 1:break;
        }
      }
    })
  },
  onShareAppMessage(){
    return{
      title: "master-lu",
      path: "/pages/about/about",
      imageUrl:"http://s11.mogucdn.com/mlcdn/c45406/171008_28ba9aade1cc95bjh1cfbb11c0ehi_640x960.jpg"
    }
    
  }
})
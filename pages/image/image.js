// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:""

  },
  handleChooseAlbum(){
    console.log("---------------")
    wx.chooseImage({
      success:(res)=> {
        // 取出路径
        const path=res.tempFilePaths

        // 设置imagePath
        this.setData({
          imagePath:path
        })

      },
    })
  },
  handleImageLoad(){
    console.log("图片加载完成")
  }
})
// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"你好小程序",
    firstname:"kobe",
    lastname:"bryant",
    age:18,
    nowTime: new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    score:45,
    movies:['星际穿越','大话西游','肖申克的救赎'],
    nums:[[1,2,3],
          [4,5,6],
          [7,8,9]],
    letters: ['a', 'b', 'c']
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitchColor(){
    this.setData({
      isActive:!this.data.isActive
    })
  },
  handleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  handleIncreament(){
    this.setData({
      score:this.data.score+6
    })
  },
  numberToFixed(value){
    return value.toFixed(2)
  }

 
})
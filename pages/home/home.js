// pages/basicInformation/basicInformation.js
//getApp()获取App()产生的实例对象
const app = getApp()
const name = app.globalData.name;
const age = app.globalData.age;
//注册一个页面
//页面也有自己的生命周期函数

Page({
  //-----------------2.初始化数据--------------------------

  /**
   * 页面的初始数据
   */
  data: {
    "message": "哈哈",
    list: []

  },

 
  //-----------------2.初始化数据--------------------------

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success:(res)=>{
        console.log(res)
        const data=res.data;
        this.setData({
          list:data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnLoad")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("下拉刷新了")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("到达底部了")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleGetUserInfo(event){
    console.log(event)
  },
  handleBtnClick(){
    //1. this.data.counter+=1, 这种做法是错误的，绑定点击并不会让界面值改变，但是实际已经改变了
    // this.data.counter+=1,
    // console.log(this.data.counter)
    // 2.this.setData
    this.setData({
      counter:this.data.counter+1
    })

  },
  handleSubtraction(){
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleViewClick(){
    console.log("哈哈哈 被点击了")
  },
  onPageScorll(obj){
    console.log(obj)
  }

})
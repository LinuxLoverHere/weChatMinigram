// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:["衣服","裤子","鞋子"]

  },

  handleBtnClick(){
    console.log("你按了我一下")
  },
  handleTouchEnd(){
    console.log("handleTouchEnd")
  }
  ,
  handleLongPress() {
    console.log("handleLongPress")
  },
  handleTap() {
    console.log("handleTap")
  },
  handleTouchMove() {
    console.log("handleTouchMove")
  },
  handleTouchStart() {
    console.log("handleTouchStart")
  },
  handleEventClick(event){
    console.log("---------------------",event)
  },
  handleEventEnd(event){
    console.log(event)
  },
  handleOuter(event){
    console.log(event)
  },
  handleInner(event){
    console.log(event)
  },
  handleItemClick(event){
    const dataset=event.currentTarget.dataset
    const title=dataset.item
    const index=dataset.index
    console.log(title,index)
  },
  // 事件冒泡和事件捕获
  handleCaptureView1(){
    console.log("handleCaptureView1")
  },
  handleCaptureView2() {
    console.log("handleCaptureView2")
  },
  handleCaptureView3() {
    console.log("handleCaptureView3")
  },
  handleBindView1() {
    console.log("handleBindView1")
  },
  handleBindView2() {
    console.log("handleBindView2")
  },
  handleBindView3() {
    console.log("handleBindView3")
  }
})
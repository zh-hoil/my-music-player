<template>
  <div class="header">
    <div class="icon">
      <img src="./icon.png" />
      <span class="title">My Music</span>
    </div>
    <div class="download">下载APP</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.header{
  width: 100%;
  height: 30px;
  padding: 10px 0;
  .icon{
    display: inline-block;
    vertical-align: middle;
    img{
      width: 30px;
      height: 30px;
      margin-left: 10px;
    }
    .title{
      display: inline-block;
      font-size: 14px;
      vertical-align: top;
      margin-top: 4px;
      color: #fff;
    }
  }
  .download{
    display: inline-block;
    width: 70px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #fff;
    border-radius: 8px;
    text-align: center;
    background: #085c4f;
    position: absolute;
    right: 20px;
  }
}
</style>

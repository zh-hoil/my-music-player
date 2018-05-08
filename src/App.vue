<template>
  <div class="app">
    <playerheader class="header"></playerheader>
    <div class="options">
      <router-link class="option" to="/recommend"><span class="item">推荐</span></router-link>
      <router-link class="option" to="/rank"><span class="item">排行榜</span></router-link>
      <router-link class="option" to="/search"><span class="item">搜索</span></router-link>
    </div>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import playerheader from 'components/playerheader/playerheader'
export default {
  components: {
    playerheader
  }
}
</script>

<style lang="less">
html{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #222222;
  font-size: 14px;
  color: #fff;
  margin: 0;
}
.header{
  position: fixed;
  top: 0;
  left: 0;
  background: #222222;
}
.options{
  width: 100%;
  position: fixed;
  top: 50px;
  left: 0;
  display: flex;
  .option{
    display: inline-block;
    width: 100%;
    flex: 1;
    text-align: center;
    text-decoration: none;
    color: #fff;
    .item{
      display: inline-block;
      height: 30px;
      width: 50px;
    }
  }
  .router-link-active{
    color: #2cbbd9;
    .item{
      border-bottom: 2px solid #fff;
    }
  }
}
.view{
  position: fixed;
  top:90px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>

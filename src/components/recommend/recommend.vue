<template>
  <div v-if="recommends">
    <div class="recommend" v-show="recommends">
      <div class="pictures">
        <Slider :pics="recommends.slider"></Slider>
      </div>
    </div>
    <div>
      <div class="radio">
        <div class="radio-title">
          <span class="line"></span>
          <span>电台</span>
          <span class="line"></span>
        </div>
        <div class="radio-list" v-for="(radio, index) in recommends.radioList" :key="index">
          <a :href="index === 0?radiohref1:radiohref2">
            <img class="pic" :src="radio.picUrl" />
            <span class="Ftitle">{{radio.Ftitle}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from 'components/base/slider'
import {getRecommend} from 'js/recommend'
export default {
  data () {
    return {
      recommends: null,
      radiohref1: '',
      radiohref2: ''
    }
  },
  created () {
    this.init()
    this.radiohtml()
  },
  methods: {
    init () {
      getRecommend().then((res) => {
        if (res.code === 0) {
          this.recommends = res.data
        }
      })
    },
    radiohtml () {
      let href = []
      for (let i = 0; i < 20; i++) {
        let songid = parseInt(Math.random() * 1000000)
        href.push(songid)
      }
      this.radiohref1 = 'https://i.y.qq.com/v8/playsong.html?songid=' + href.slice(0, 9).join(',')
      this.radiohref2 = 'https://i.y.qq.com/v8/playsong.html?songid=' + href.slice(10).join(',')
    }
  },
  components: {
    Slider
  }
}
</script>

<style lang="less">
.radio{
  width: 100%;
  .radio-title{
    width: 100%;
    display: inline-block;
    height: 30px;
    font-size: 16px;
    text-align: center;
    .line{
      display: inline-block;
      width: 40%;
      border-bottom: 1px solid #dde7ef;
    }
  }
  .radio-list{
    display: inline-block;
    padding: 0 10px;
    width: 40%;
    a{
      display: inline-block;
      width: 100%;
      font-size: 14px;
      color: #e7edf3;
      flex: 1;
      padding: 5px;
      background: #1d1f22;
      text-decoration: none;
      .pic{
        display: block;
        width: 100%;
      }
    }
  }
  .radio-list:last-child{
    float: right;
    margin-right: 10px;
  }
}
</style>

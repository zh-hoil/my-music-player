<template>
  <div ref="rank">
    <div class="rank">
      <div class="list" v-show="rank" v-for="(item, index) in rank" :key="index">
        <a :href="`https://y.qq.com/w/toplist.html?id=${item.id}&type=top`">
          <div class="wrapper-left">
            <img :src="item.picUrl" />
            <div class="detail">
              <span class="icon"></span>
              <span class="count">{{parseFloat(item.listenCount/10000, 2)}}万</span>
            </div>
          </div>
          <div class="wrapper-right">
            <span class="title">{{item.topTitle}}</span>
            <ul>
              <li class="song-list" v-for="(song, index) in item.songList" :key="index">
                {{index + 1}} {{song.songname}}-{{song.singername}}
              </li>
            </ul>
          </div>
          <span class="arrow-right">></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {getRank} from 'js/rank'
export default {
  data () {
    return {
      rank: {}
    }
  },
  components: {
    scroll
  },
  created () {
    this.init()
  },
  mounted () {
    setTimeout(() => {
      this.initScroll()
    }, 20)
  },
  methods: {
    init () {
      getRank().then((res) => {
        if (res.code === 0) {
          this.rank = res.data.topList
        }
      })
    },
    initScroll () {
      if (!this.$refs.rank) {
        return
      }
      this.scroll = new BScroll(this.$refs.rank, {
        probeType: 1,
        click: true
      })
    }
  }
}
</script>

<style lang="less">
.rank{
  width: 100%;
  overflow: hidden;
  .list{
    padding: 10px 10px 0 10px;
    a{
      width: 100%;
      display: inline-block;
      color: #fff;
      text-decoration: none;
      position: relative;
      .wrapper-left{
        display: inline-block;
        position: relative;
        img{
          width: 100px;
          height: 100px;
        }
        .detail{
          position: absolute;
          bottom: 10px;
          left: 5px;
          .icon{
            display: inline-block;
            height: 12px;
            width: 12px;
            background: url('./ear.png');
            background-size: 12px 12px;
          }
          .count{
            font-size: 10px;
            color: #fff;
            vertical-align: middle;
          }
        }
      }
      .wrapper-right{
        display: inline-block;
        margin-left: 10px;
        letter-spacing: 1px;
        position: relative;
        top: -10px;
        .title{
          font-size: 14px;
          height: 14px;
          color: #fff;
          font-weight: bold;
        }
        ul{
          padding: 0;
          list-style: none;
          .song-list{
            width: 200px;
            margin-top: 5px;
            font-size: 12px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
      .arrow-right{
        display: inline-block;
        line-height: ;
        position: absolute;
        top: 45%;
        right: 10px;
      }
    }
  }
}
</style>

<template>
  <div class="suggest"  ref="suggest">
    <ul class="suggest-list" v-show="query">
      <li class="suggest-item" v-for="(item, index) in result" :key="index">
        <a :href="item.mid ?'https://i.y.qq.com/v8/playsong.html?songmid=' + item.mid : 'https://y.qq.com/w/singer.html?singermid=' + item.singermid">
          <span :class="getIconCls(item)"></span>
          <span class="text" v-html="getDisplayName(item)"></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {search} from 'js/search'
import {createSong} from 'js/song'
import BScroll from 'better-scroll'
const TYPE_SINGER = 'singer'
export default{
  data () {
    return {
      page: 1,
      perpage: 20,
      result: []
    }
  },
  props: {
    query: {
      type: String,
      default: ''
    },
    showSinger: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    setTimeout(this.initScroll(), 20)
  },
  created () {
    this.search()
  },
  methods: {
    search () {
      search(this.query, this.page, this.showSinger, this.perpage)
        .then((res) => {
          if (res.code === 0) {
            this.result = this.genResult(res.data)
          }
        })
    },
    initScroll () {
      if (!this.$refs.suggest) {
        return
      }
      this.scroll = new BScroll(this.$refs.suggest, {
        probeType: 1,
        click: true
      })

      this.scroll.on('scrollEnd', () => {
        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
          this.searchMore()
        }
      })
    },
    searchMore () {
      search(this.query, this.page, this.showSinger, this.perpage)
        .then((res) => {
          if (res.code === 0) {
            this.result = [...this.result, ...this.genResult(res.data)]
          }
        })
    },
    getIconCls (item) {
      if (item.type === TYPE_SINGER) {
        return 'icon-singer'
      } else {
        return 'icon-music'
      }
    },
    getDisplayName (item) {
      if (item.type === TYPE_SINGER) {
        return item.singername
      } else {
        return `${item.name} - ${item.singer}`
      }
    },
    genResult (data) {
      let ret = []
      if (data.zhida && data.zhida.singerid) {
        ret.push({...data.zhida, ...{type: TYPE_SINGER}})
      }
      if (data.song) {
        ret = ret.concat(this.normallizeSongs(data.song.list))
      }
      this.page++
      return ret
    },
    normallizeSongs (list) {
      let ret = []
      list.forEach(musicData => {
        if (musicData.songid && musicData.albumid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  watch: {
    query () {
      this.search()
    }
  }
}
</script>

<style lang="less">
.suggest{
  position: fixed;
  top: 160px;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  .suggest-list{
    overflow: hidden;
    margin-top: 0;
    font-size: 15px;
    list-style: none;
    padding-left: 40px;
    background: rgb(42, 42, 42);
    .suggest-item{
      width: 100%;
      margin: 8px 0;
      a{
        text-decoration: none;
        color: #fff;
        white-space: nowrap;
        .icon-singer, .icon-music{
          display: inline-block;
          width: 20px;
          height: 20px;
        }
        .icon-singer{
          background: url('./singer.png');
          background-size: 20px 20px;
        }
        .icon-music{
          background: url('./music.png');
          background-size: 20px 20px;
        }
        .text{
          display: inline-block;
          width: 70%;
          vertical-align: top;
          margin-left: 5px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }

  }
}
</style>

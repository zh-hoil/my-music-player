<template>
  <div class="search">
    <Searchbar @query="changequery" ref="searchbar"></Searchbar>
    <div class="hot" v-if="hotkey" v-show="!query">
      <h3 class="title">热门搜索</h3>
      <ul class="hot-list">
        <li class="hot-key" v-if="hotkey.special_key" :class="{'special': hotkey.special_key}">
          <a :href="hotkey.special_url">{{hotkey.special_key}}
          </a>
        </li>
        <li class="hot-key" v-for="(key, index) in hotkey.hotkey" :key="index"
        @click="setQuery(key.k)">{{key.k}}</li>
      </ul>
    </div>
    <Suggest :query="query" v-show="query"></Suggest>
  </div>
</template>

<script>
import Searchbar from 'components/base/Searchbar'
import Suggest from 'components/base/Suggest'
import {getHotKey} from 'js/search'
export default {
  data () {
    return {
      hotkey: null,
      query: ''
    }
  },
  components: {
    Searchbar,
    Suggest
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      getHotKey().then((res) => {
        if (res.code === 0) {
          this.hotkey = res.data
        }
      })
    },
    setQuery (query) {
      this.$refs.searchbar.setQuery(query)
    },
    changequery (query) {
      this.query = query
    }
  }
}
</script>

<style lang="less">
.search{
  width: 100%;
  .hot{
    padding: 10px;
    .title{
      font-weight: bold;
    }
    .hot-list{
      list-style: none;
      padding: 0;
      width: 100%;
      .hot-key{
        display: inline-block;
        text-align: center;
        height: 30px;
        line-height: 30px;
        padding: 0 8px;
        margin: 5px 8px;
        border: 1px solid #fff;
        border-radius: 12px;
        color: #fff;
      }
      .special{
        border-color: #ff0000;
        a{
          text-decoration: none;
          color: #ff0000;
        }
      }
    }
  }
}
</style>

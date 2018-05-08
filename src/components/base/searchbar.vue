<template>
  <div class="search-area">
    <div class="search-bar">
      <span class="search-icon"></span>
      <input class="search-input" v-model="query" type="text" :placeholder="placeholder"/>
      <span class="cancel" v-show="query" @click="clear">x</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '搜索歌手、歌曲'
    }
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    clear () {
      this.query = ''
    },
    setQuery (query) {
      this.query = query
    }
  },
  created () {
    this.$watch('query', (newQuery) => {
      this.$emit('query', newQuery)
    })
  }
}
</script>

<style lang="less">
.search-area{
  padding: 10px 10px;
  width: 95%;
  height: 50px;
  background: #2a2a2a;
  .search-bar{
    padding: 10px 10px;
    background: #363636;
    border-radius: 8px;
    .search-icon{
      display: inline-block;
      width: 25px;
      height: 25px;
      background: url('./search.png') no-repeat;
      background-size: 25px 25px;
      vertical-align: middle;
    }
    .search-input{
      display: inline-block;
      width: 80%;
      height: 25px;
      margin-left: 10px;
      background: #363636;
      border: none;
      color: #fff;
      letter-spacing: 1px;
      outline: none;
    }
    .cancel{
      display: inline-block;
      width: 20px;
      height: 20px;
      margin: 5px 10px 0 0;
      font-weight: lighter;
      line-height: 18px;
      border-radius: 50%;
      background: #2a2a2a;
      text-align: center;
      float: right;
    }
  }
}

</style>

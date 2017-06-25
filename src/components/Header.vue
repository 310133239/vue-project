<template>
  <div class="header">
    <span>{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: ''
    }
  },
  props: {
    info: String
  },
  created: function () {
    this.getdata(this.info)
  },
  watch: {
    info: function () {
      this.getdata(arguments[0])
    }
  },
  methods: {
    getdata: function (data) {
      switch (data) {
        case '/index':
          this.msg = 'Qu跑'
          break
        case '/mine':
          this.msg = '出行'
          break
        case '/news':
          this.msg = '约跑'
          break
        case '/exit':
          this.msg = '我的'
          break
        default:
          this.msg = '我的'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  line-height: 40px;
  text-align: left;
  background: #42b983;
  padding: 0 20px;
  color: #fff;
}
</style>

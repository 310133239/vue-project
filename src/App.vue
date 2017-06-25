<template>
  <div id="app" >
    <router-view name="header" class="header" :info="toheader"></router-view>
    <router-view name="main" class="main"></router-view>
    <router-view name="footer" class="footer"></router-view>
    <my-alert v-show="myshow" :msg="msg"></my-alert>
    <my-confirm v-on:sure="clicksure" v-on:cancel="clickcancel" v-show="confirmShow" :confirminfo="confirmContent"></my-confirm>
    <my-loader v-show="loaderShow"></my-loader>
  </div>
</template>

<script>
import myalert from '@/components/alert'
import confirm from '@/components/confirm'
import loader from '@/components/loader'
export default {
  name: 'app',
  data () {
    return {
      myshow: false,
      msg: 'hello word',
      confirmShow: false,
      confirmContent: '您打开了confirm',
      loaderShow: true,
      toheader: ''
    }
  },
  watch: {
    '$route' (to, from) {
      this.toheader = this.$route.path
    }
  },
  components: {
    'my-alert': myalert,
    'my-confirm': confirm,
    'my-loader': loader
  },
  methods: {
    click: function () {
      this.msg = '456'
      this.myshow = !this.myshow
    },
    clickcancel: function (ev) {
      this.confirmShow = false
    },
    clicksure: function (ev) {
      this.confirmShow = false
    }
  },
  created () {
    const that = this
    setTimeout(function () {
      that.loaderShow = false
    }, 2000)
    this.toheader = this.$route.path
  }
}
</script>

<style>
body , html{
  height: 100%;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: #f1f1f1;
}
.header{
  height: 40px;
  flex-shrink: 0;
  flex-grow: 0;
}
.footer{
  height: 60px;
  flex-shrink: 0;
  flex-grow: 0;
}
.main{
  flex-shrink: 1;
  flex-grow: 1;
  width: 100%;
  overflow-y: scroll;
}
.header .router-link-active{
  color: #f60!important;
  text-decoration: none;
  background: #fff;
}
</style>

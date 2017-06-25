<template>
  <div class="footer">
    <ul>
      <router-link :to='{path: "/" + item.url}' v-for="item in msg" >
        <i class="glyphicon " v-bind:class="item.classname"></i>
        <div class="icon">{{item.name}}</div>
      </router-link >
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {
        msg: [
          {'name': '首页', 'url': 'index', 'classname': 'glyphicon-home'},
          {'name': '约跑', 'url': 'news', 'classname': 'glyphicon-fire'},
          {'name': '出行', 'url': 'mine', 'classname': 'glyphicon-heart'},
          {'name': '我的', 'url': 'exit', 'classname': 'glyphicon-user'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
    background: #fff;
  }
  .footer ul{
    background: #fff;
  }
  ul {
    padding: 0;
    display: flex;
    flex-direction: row;
    height: 60px;
    background: #f1f1f1;
    margin: 0;
  }
  ul a{
    flex-grow: 1;
    flex-shrink: 1;
  }
  a {
    display: block;
    height:50px;
    line-height: 30px;
    margin-top: 10px;
    color: #333;
  }
  a i{
    font-size: 18px;
    text-decoration: none;
  }
  .icon{
    height:20px;
    line-height: 18px;
  }
  .router-link-active{
    color: #42b983;
    text-decoration: none;
  }
</style>

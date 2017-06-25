<template>
  <div class="mine">
    <div class="hotmove">
      <i class=" hotfire glyphicon glyphicon-fire"></i>
      <span>热门活动</span>
      <em class="right glyphicon glyphicon-chevron-right"></em>
    </div>
    <ul class="moveList">
      <router-link :to="123" v-for="value in msg">
        <li >
          <div class="name">{{value.name}}</div>
          <div class="info">{{value.info}}</div>
          <div class="leaderandtime">
            <div class="leader">{{value.leader}}</div>
            <div class="time">{{value.time}}</div>
          </div>
          <div class="join" v-if="value.join">正在报名</div>
          <div class="joined" v-else="">停止报名</div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {
      msg: [
        {
          name: '夜跑队',
          info: '昌平地区跑步',
          leader: '小梦刚',
          time: '2017-06-17 06:00',
          join: true
        },
        {
          name: '阿里队',
          info: '愿天下没有难跑的步',
          leader: '马云',
          time: '2017-06-17 06:00',
          join: true
        },
        {
          name: '百度队',
          info: '百度中国',
          leader: '李彦宏',
          time: '2017-06-17 06:00',
          join: true
        },
        {
          name: '小米队',
          info: '为了发烧而跑',
          leader: '雷布斯',
          time: '2017-06-17 06:00',
          join: false
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hotmove{
    height: 30px;
    margin-top: 5px;
    padding: 0 5px;
    background: #fff;
    line-height: 30px;
  }
  .hotmove .hotfire{
    float: left;
    height: 30px;
    width: 30px;
    line-height: 30px;
    color: red;
  }
  .hotmove span{
    float: left;
    line-height: 30px;
    margin-left: 5px;
  }
  .hotmove .right{
    float: right;
    color: #42b983;
    height: 30px;
    line-height: 30px;
  }
  .moveList{
    margin: 0;
    padding: 0;
  }
  .moveList li{
    margin: 0;
    padding: 10px;
    background: #fff;
    margin-top: 10px;
    position: relative;
  }
  .name{
    height:20px;
    line-height: 20px;
    font-size: 18px;
    color: #333;
    text-align: left;
  }
  .info{
    font-size: 12px;
    color: #887d7d;
    text-align: left;
    line-height: 18px;
    margin-top: 5px;
  }
  .leader{
    float: left;
  }
  .time{
    float: left;
  }
  .leaderandtime{
    color: #333;
    font-size: 12px;
    margin-top: 5px;
    height:20px;
  }
  .join{
    height:30px;
    line-height: 30px;
    background: rgba(0, 0, 255, 0.53);
    color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 5px;
  }
  .joined{
    height:30px;
    line-height: 30px;
    background: rgba(51, 51, 51, 0.53);
    color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 5px;
  }
</style>

<template>
  <div class="hoteventList">
    <ul>
      <router-link class="hoteventlist" :to='{path: "/" + value.todetailUrl}' v-for="value in hotEventList">
        <li>
          <div class="imgBox">
            <img v-bind:src="value.imgUrl"  alt="">
            <div class="free" v-if="value.free">免费</div>
            <div  v-else class="nofree">收费</div>
            <div class="personNum">{{value.nowperson}}人报名</div>
            <div class="joinIng" v-if="value.nowJoin">正在报名</div>
            <div  v-else class="noJoin">已经停止报名</div>
          </div>
          <div class="imgBoxBtm">
            <div class="leader">{{value.leader}}</div>
            <div class="nowsee glyphicon glyphicon-eye-open">{{value.nowSee}}</div>
            <div class="nameandtime">
              <div class="name">{{value.name}}</div>
              <div class="time">{{value.time}}</div>
            </div>
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      hotEventList: [
        {
          // 图片地址
          imgUrl: require('../assets/3.jpg'),
          leader: '小梦刚',
          time: '2017-06-24',
          name: '北京天安门',
          free: true,
          nowperson: 0,
          nowJoin: true,
          todetailUrl: 'detail/001',
          nowSee: 100
        },
        {
          // 图片地址
          imgUrl: require('../assets/4.jpg'),
          leader: '宁妹子',
          time: '2017-06-25',
          name: '颐和园',
          free: true,
          nowperson: 0,
          nowJoin: true,
          todetailUrl: 'detail/002',
          nowSee: 200
        },
        {
          // 图片地址
          imgUrl: require('../assets/5.jpg'),
          leader: '小黑',
          time: '2017-06-26',
          name: '南锣鼓巷',
          free: true,
          nowperson: 0,
          nowJoin: true,
          todetailUrl: 'detail/003',
          nowSee: 200
        },
        {
          // 图片地址
          imgUrl: require('../assets/6.jpg'),
          leader: '吴老二',
          time: '2017-06-27',
          name: '奥林匹克公园',
          free: true,
          nowperson: 0,
          nowJoin: true,
          todetailUrl: 'detail/004',
          nowSee: 800
        },
        {
          // 图片地址
          imgUrl: require('../assets/7.jpg'),
          leader: '张大柱',
          time: '2017-06-28',
          name: '北海公园',
          free: true,
          nowperson: 0,
          nowJoin: true,
          todetailUrl: 'detail/001',
          nowSee: 1500
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hoteventlist{
    padding: 10px;
    display: block;
  }
  .hoteventlist li,ul{
    padding: 0;
    margin: 0;
  }
  .hoteventlist li{
    height:100%;
    width:100%;
    border-bottom: 1px solid #eee;
  }
  .imgBox{
    height:160px;
    width:100%;
    position: relative;
    background: rgba(51, 51, 51, 0.7);
  }
  .imgBox img{
    height:100%;
    width:100%;
  }
  .free{
    position: absolute;
    background: #ff8364;
    left: 20px;
    top: 20px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    padding: 1px 3px;
    color: #fff;
  }
  .personNum{
    position: absolute;
    right:0;
    top: 20px;
    background: rgba(51, 51, 51, 0.7);
    border-radius: 5px 0 0 5px ;
    padding:1px 3px ;
    color: #fff;
  }
  .joinIng{
    background: rgba(83, 163, 255, 0.85);
    color: #fff;
    position: absolute;
    left: 20px;
    bottom: 20px;
    padding:1px 3px ;
    border-radius: 3px;
  }
  .imgBoxBtm{
    height: 60px;
  }
  .imgBoxBtm .leader{
    color: #333;
    font-size: 16px;
    float: left;
  }
  .nowsee{
    float: right;
    height:20px;
    line-height: 20px;
    color: #7a7a7a;
    font-size: 12px;
  }
  .nameandtime{
    width:100%;
    float: left;
    margin-top: 3px;
  }
  .name{
    float: left;
  }
  .time{
    float: right;
    color: #7a7a7a;
  }
</style>

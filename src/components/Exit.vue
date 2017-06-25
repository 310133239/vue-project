<template>
  <div class="exit">
    <div class="owerPic">
      <div class="imgBox">
        <img src="../assets/8.jpg" alt="even" >
      </div>
      <div class="btngrounp">
          <div class="loginBtn">
            登录
          </div>
          <div class="register">
            注册
          </div>
      </div>
    </div>
    <div class="gnBtn">
      <div class="fabuBtn">发布</div>
      <div class="ypBtn">约跑</div>
      <div class="yxBtn">约行</div>
    </div>
    <ul class="lilist">
      <li>
        <div class="glyphicon glyphicon-user iconL"></div>
        <span class="textBox">学成认证</span>
        <div class="glyphicon glyphicon-chevron-right iconR"></div>
      </li>
      <li>
        <div class="glyphicon glyphicon-file iconL"></div>
        <span class="textBox">我的详情</span>
        <div class="glyphicon glyphicon-chevron-right iconR"></div>
      </li>
      <li>
        <div class="glyphicon glyphicon-envelope iconL"></div>
        <span class="textBox">消息通知</span>
        <div class="glyphicon glyphicon-chevron-right iconR"></div>
      </li>
    </ul>
    <ul class="lilist">
      <li>
        <div class="glyphicon glyphicon-plus iconL"></div>
        <span class="textBox">邀请通知</span>
        <div class="glyphicon glyphicon-chevron-right iconR"></div>
      </li>
      <li>
        <div class="glyphicon glyphicon-home iconL"></div>
        <span class="textBox">选择高校</span>
        <div class="glyphicon glyphicon-chevron-right iconR"></div>
      </li>
    </ul>
    <ul class="lilist">
      <li>
        <div class="glyphicon glyphicon-user iconL"></div>
        <span class="textBox">设置</span>
        <div class="glyphicon glyphicon-chevron-right iconR"></div>
      </li>
      <li>
        <div class="glyphicon glyphicon-earphone iconL"></div>
        <span class="textBox">联系作者</span>
        <div class="glyphicon glyphicon-chevron-right iconR"></div>
        <span class="phone">15652923899</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'exit',
  data () {
    return {
      msg: '退出页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.owerPic{
  height: 160px;
  background: #42b983;
  overflow: hidden;
}
.imgBox{
  height:80px;
  width:80px;
  background: red;
  margin: 10px auto;
  border-radius: 50%;
}
.imgBox img{
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border:2px solid #fff;
}
.btngrounp{
  height:35px;
  width:200px;
  margin: 0 auto;
}
.loginBtn{
  height:35px;
  line-height: 35px;
  float: left;
  width:100px;
  color: #fff;
  background: rgba(83, 163, 255, 0.85);
  border-radius: 5px 0 0 5px;
}
.register{
  height:35px;
  line-height: 35px;
  float: left;
  width:100px;
  color: #42b983;
  background: #fff;
  border-radius:  0 5px 5px 0 ;
}
.gnBtn{
  height:50px;
  background: #fff;
  padding: 5px;
  display: flex;
  flex-direction: row;
}
.gnBtn > div {
  flex-grow: 1;
  flex-shrink: 1;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  border-right:1px solid #42b983;
}
.gnBtn  div:last-child{
  border:none;
}
ul{
  margin: 0;
  padding: 0;
  margin-top: 10px;
}
.lilist li{
  padding: 5px;
  margin: 0;
  border-bottom: 1px solid #eee;
  list-style: none;
  background: #fff;
  height:40px;
  line-height: 30px;
}
.lilist li .iconL{
  float: left;
  height:30px;
  line-height: 30px;
  color: #42b983;
  border-bottom: 1px solid #eee;
}
.lilist li  .textBox{
  float: left;
  height:30px;
  line-height:30px;
  margin-left: 5px;
}
.lilist li  .iconR{
  float: right;
  height: 30px;
  line-height: 30px;
  color: #7a7a7a;
}
.phone{
  height:30px;
  line-height: 30px;
  color:#bce8f1;
  float: right;
  margin-right: 5px;
}
</style>

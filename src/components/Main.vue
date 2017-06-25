<template>
  <div class="main">
        <div class="banner">
          <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-item"><img src="../assets/1.jpg" alt="..."></swiper-slide>
            <swiper-slide class="swiper-item"><img src="../assets/2.jpg" alt="..."></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <nav>
          <div class="navTop">
            年轻人一起约起来
          </div>
          <!--nav界面-->
          <div class="navList">
            <li>
              <i class="glyphicon glyphicon-user"></i>
              <p>新用户</p>
            </li>
            <li>
              <i class="glyphicon glyphicon-heart"></i>
              <p>喜欢</p>
            </li>
            <li>
              <i class="glyphicon glyphicon-fire"></i>
              <p>新用户</p>
            </li>
            <li>
              <i class="glyphicon glyphicon-off"></i>
              <p>新用户</p>
            </li>
          </div>
        </nav>
        <div class="hotmove">
          <i class=" hotfire glyphicon glyphicon-fire"></i>
          <span>热门活动</span>
          <em class="right glyphicon glyphicon-chevron-right"></em>
        </div>
        <list></list>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import list from '@/components/list'
export default {
  name: 'main',
  data () {
    return {
      swiperOption: {
        autoplay: 3500,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        loop: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    list: list
  },
  created: function () {
  }
}
</script>


<style scoped>
.banner{margin-bottom: 15px;}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.swiper-container{
  height: 200px;
  width: 100%;
}
.swiper-box img{
  height: 100%;
  width: 100%;
}
nav{
  background: #fff;
}
.navTop{
  height: 30px;
  width: 200px;
  margin: 0 auto;
  border-bottom: 1px solid #333;
  line-height: 30px;
}
.navList {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.navList li{
  height: 60px;
  width: 60px;
  flex-shrink: 1;
  flex-grow: 1;
  background: #42b983;
  border-radius: 45%;
  margin-bottom: 10px;
}
.navList li i{
 display: inline-block;
 height: 20px;
 width: 20px;
 margin: 0 auto;
 line-height: 40px;
 text-align: center;
 color: #fff;
 font-size: 20px;
}
.navList li p{
  margin: 0;
  color: #fff;
  font-size: 12px;
}
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
  /*热门活动详情*/

</style>

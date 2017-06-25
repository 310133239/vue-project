<template>
  <div class="index">
    <h1  v-on:touchmove="show">{{ msg }}</h1>
    <div v-on:click="clickMe">789456123</div>
  </div>
</template>

<script>
// import $ from 'jQuery'
export default {
  data () {
    return {
      msg: '首页部分'
    }
  },
  methods: {
    clickMe: function () {
      alert(123)
    },
    show: function (ev) {
      console.log(ev.targetTouches[0].clientX)
    }
  },
  created: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>

<template>
  <div class="news">
    <list></list>
  </div>
</template>

<script>
import list from '@/components/list'
export default {
  name: 'news',
  data () {
    return {
      msg: '新闻详情'
    }
  },
  components: {
    list: list
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

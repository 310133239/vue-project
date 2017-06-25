<template>
  <div class="diog">
    <div class="alert1" >
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'alert',
  props: [ 'msg' ]

}
</script>

<style scoped>
.diog{
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(51, 51, 51, 0.67);
  z-index: 20;
}
.alert1{
  position: absolute;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  width: 100px;
  color: #fff;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: #333;
}
</style>

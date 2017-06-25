<template>
  <div class="diog">
    <div class="confirm" >
        <div class="confirmtop">
          提示
        </div>
        <div class="confirmContent">
          {{confirminfo}}  
        </div>
        <div class="confirmBtn">
          <div class="confirmLeft " @click="cancel">
            取消
          </div>
          <div class="confirmRight " @click="sure">
            确定
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'alert',
  props: [ 'confirminfo' ],
  methods: {
    cancel () {
      // alert(1)
      this.$emit('cancel')
    },
    sure () {
      // alert(2)
      this.$emit('sure')
    }
  }
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
.confirm{
  position: fixed;
  padding: 10px;
  max-height: 100px;
  border-radius: 3px;
  width: 150px;
  color: #333;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}
.confirmtop{
  height: 20px;
  text-align: center;
}
.confirmContent{
  max-height: 60px;
}
.confirmBtn{
  border-top: 1px solid #eee;
  height: 20px;
  position: absolute;
  left: 0;
  bottom: 3px;
}
.confirmLeft{
  line-height: 20px;
  width: 75px;
  float: left;
  color: #42b983;
  border-right: 1px solid #eee;
}
.confirmRight{
  line-height: 20px;
  width: 75px;
  float: left;
  color: #f60;
}
</style>

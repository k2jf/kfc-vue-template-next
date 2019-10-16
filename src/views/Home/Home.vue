<template>
  <div>
    <h1 align="center">
      This is a vue template.
    </h1>
    <div class="icon">
      <svg-icon icon-class="view" />
      <svg-icon icon-class="message" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  mounted () {
    console.log(this.$axios)
    // 如下方式调用接口
    // this.$axios.get('/test-api')
    //   .then(res => {
    //     console.log(res)
    //   })
  }
}
</script>
<style lang="less" scoped>
  .icon {
    text-align: center;
    font-size: 100px;
  }
</style>

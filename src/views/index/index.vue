<template>
  <div class="index">
    <van-button type="info" @click="info">信息按钮</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    info() {
      console.log(this)
      this.$alert({
        message: '弹窗内容'
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

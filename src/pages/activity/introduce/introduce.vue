<template>
  <div class="introduce">
      <div class="head">
          <h1>基本信息</h1>
          <span>未发布</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'introduce'
};
</script>

<style scoped>
.introduce{
    width: 100%;
    background: #fff;
    padding: 0 10px;
    box-sizing: border-box;
}
.head{
    width: 100%;
    line-height: 30px;
}
.head h1{
    font-size: 20px;
    font-weight: bold;
    float: left;
}
.head span{
    float: right;
}
</style>

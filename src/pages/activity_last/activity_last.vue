<template>  
  <div class="last">
      <img-loader v-for="(v, i) in $store.state.pic_upload_list" :key="i" :data="v" :index="i"></img-loader>
      <el-row class="tab-btn">
            <el-button type="primary">保存并发布</el-button>
      </el-row>
  </div>
</template>

<script>
import Img_loader from '../../component/upload_img.vue';
export default {
    name: 'last',
    components: {
        'img-loader': Img_loader
    }
};
</script>

<style scoped>
.last{
  box-sizing: border-box;
  width: 100%;
  background: #fff;
  padding: 0 10px;
}
.column-name{
    padding-top: 20px;
}
.column-name input{
    border: none;
    width: 100px;
    padding: 0;
}
.tab-btn{
    display: flex;
    justify-content: center;
}
.upload-box{
    margin-top: 5px;
    border: 1px solid #ccc;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .prompt{
      line-height: 20px;
      color: #ccc;
  }
  .el-upload{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.upload-input{
    display: none;
}
.avatar-uploader{
    display: flex;
    justify-content: center;
}
</style>

<template>
  <div class="">
    <div class="column-name">
        <input type="text" placeholder="请输入栏目名称">
        <span>编辑</span>
        <span @click="add_column">添加栏目</span>
        <span @click="preview">预览</span>
        <span v-if="data.hasDel" class="del" @click="del_column(index)">删除</span>
    </div>
    <el-upload
    class="avatar-uploader"
    action="http://localhost:3000/user/upload"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <p class="prompt">图片格式: jpg/png 图片大小: 小于200k 建议尺寸: 宽度大于800px</p>
  </div>
</template>

<script>
export default {
    props: {
        data: {
            required: true,
            type: Object
        },
        index: {
            type: Number
        }
    },
    data: () => {
        return {
            imageUrl: ''
        };
    },
    methods: {
        preview () {
            this.$alert(`<img src=${this.imageUrl} class="preview">`, '图片预览', {
                dangerouslyUseHTMLString: true
        });
        },
        add_column () {
            this.$store.commit('updata_pic_upload_list', {hasDel: true});
        },
        del_column (index) {
            this.$store.commit('del_pic_upload_list', {
                i: index
            });
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
            this.$store.commit('upload_imgUrl', this.imageUrl);
        },
        beforeAvatarUpload(file) {
            // const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            const isPIC = (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif');
            if (!isPIC) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isPIC && isLt2M;
        }
    }
};
</script>

<style scoped>
.column-name{
    padding-top: 20px;
}
.column-name input{
    border: none;
    width: 100px;
    padding: 0;
}
.prompt{
    line-height: 20px;
    color: #ccc;
}
.avatar-uploader .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
.avatar-uploader{
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
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
.del{
    color: red;
}
.el-upload{
    width: 100%;
    height: 100%;
}
.el-upload img{
    width: 100%;
    height: 100%;
}
</style>

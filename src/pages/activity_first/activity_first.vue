<template>
  <div class="first-box">
      <div class="first-tit">
          <h1>基本信息</h1>
          <span>未发布</span>
      </div>
      <div class="first-content">
          <div class="banner">
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
          <div class="address">
              <p>活动名称</p>
              <input type="text" placeholder="春暖花开4月生日会" v-model="actName">
              <p>活动时间</p>
              <div class="time-box">
                <div class="block">
                        <el-date-picker
                        v-model="startTime"
                        type="date"
                        placeholder="活动结束时间"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd">
                        </el-date-picker>
                </div>
                <div class="block">
                        <el-date-picker
                        v-model="endTime"
                        type="date"
                        placeholder="活动结束时间"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd">
                        </el-date-picker>
                </div>
              </div>
              <p>请选择地址</p>
              <add-select :data="addressList" @info="getInfo"></add-select>
          </div>
      </div>
      <div class="first-upload">
          <img-loader v-for="(v, i) in $store.state.pic_upload_list" :key="i" :data="v" :index="i"></img-loader>
      </div>
      <el-row class="tab-btn">
            <el-button type="primary" @click="save_pulish">保存并发布</el-button>
      </el-row>
  </div>
</template>

<script>
import Img_loader from '../../component/upload_img.vue';
import add_select from './activity_address.vue';
export default {
    name: 'first',
    data: () => {
        return {
            imageUrl: '',
            actName: '',
            startTime: '',
            endTime: '',
            addressList: [],
            addInfo: null
        };
    },
    components: {
        'img-loader': Img_loader,
        'add-select': add_select
    },
    created () {
        this.$http.get('/admin/community/location/root').then(res => {
            this.addressList = res.data;
        });  
    },
    methods: {
        getInfo (data) {
            this.addInfo = data.prov + data.city + data.area;
        },
        save_pulish () {
            // console.log(this.$route);
            if (!this.actName) {
                this.$message('请填写活动名称');
                return;
            }
            this.$http.post('/admin/activity/add', {
                categoryId: '活动类别id',
                name: this.actName,
                imagePath: this.$store.state.imgUrls,
                startDate: this.startTime,
                endDate: this.endTime,
                locationName: this.addInfo
            }).then((res) => {
                if (res.data === 'success') {
                    this.$alert('活动发布成功', '消息提示', {
                        callback: () => {
                            location.reload();
                        }
                    })
                }
            })
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
.first-box{
    box-sizing: border-box;
    width: 100%;
    background: #fff;
    padding: 0 10px;
}
.first-tit{
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding-top: 20px;
}
.first-tit h1{
    float: left;
    font-size: 18px;
    font-weight: bold;
}
.first-tit span{
    float: right
}
.first-content{
    width: 100%;
    display: flex;
    background: #fff;
}
.banner{
    float: left;
    width: 550px;
}
.address{
    width: 100%;
    float: left;
    padding-left: 10px;
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
  .prompt{
      line-height: 20px;
      color: #ccc;
  }
.address p{
    color: #ccc;
    margin-top: 2px;
}
.address input{
    display: block;
    width: 100%;
    height: 30px;
    margin-bottom: 15px;
}
.time-box{
    width: 100%;
    position: relative;
}
.block{
    display: inline-block;
    margin-top: 3px;
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
.el-upload{
    width: 357px;
    height: 180px;
}
.el-upload img{
    width: 357px;
    height: 180px;
}
</style>

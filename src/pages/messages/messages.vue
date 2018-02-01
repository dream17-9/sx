<template>
    <div class="conBox">
        <h2>基本信息</h2>
        <!-- 负责人 -->
        <el-row class="principal">
            <el-col :span="12">
                <h6>责任人</h6>
                <el-dropdown class="zr first" trigger="click">
                    <span class="el-dropdown-link">
                        选择责任人<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>张鑫, 13522466765</el-dropdown-item>
                        <el-dropdown-item>王亮,18671334075</el-dropdown-item>
                        <el-dropdown-item>李明,18516823345</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
            <el-col :span="12">
                <h6>责任人</h6>
                <el-dropdown class="zr" trigger="click">
                    <span class="el-dropdown-link">
                        选择责任人<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>张鑫, 13522466765</el-dropdown-item>
                        <el-dropdown-item>王亮,18671334075</el-dropdown-item>
                        <el-dropdown-item>李明,18516823345</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
        <el-input
        placeholder="张鑫，13523726650"
        :disabled="true" class="disabled">
        </el-input>
        <!-- 上传图片 -->
        <div class="loadImg">
            <img-loader v-for="(v, i) in $store.state.pic_upload_list" :key="i" :data="v" :index="i"></img-loader>
        </div>
        <el-row class="tab-btn">
            <el-button type="primary">保存并发布</el-button>
        </el-row>
    </div>
</template>

<script>
import Img_loader from '../../component/upload_img.vue';
export default {
    name: 'message',
    props: {
        flag: {
            type: Boolean
        }
    },
    components: {
        'img-loader': Img_loader
    }
};
</script>

<style scoped>
.tab-btn{
    text-align: center;
}
.tab-content{
    width: 100%;
    height: 100%;
    background: red;
    margin: 10px;
}
.el-child-main{
    padding: 10px;
}
.conBox{
    margin-top: 20px;
    background: #fff;
    height: 100%;
    padding: 0 20px;
}
.conBox h2{
    font-size: 20px;
    padding-top: 20px;
    font-weight: bold;
}
.principal{
    padding-top: 20px;
}
.principal h6{
    float: left;
}
.principal .first{
    margin-right: 10px;
}
.principal .zr{
    float: right;
    /* margin-right: 10px; */
}
.disabled{
    margin-top: 5px;
    background: #ccc;
}
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
</style>

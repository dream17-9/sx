<template>
  <div class="activity">
    <ul class="tab">
        <li><router-link :to="{name: 'first'}" active-class="active">活动介绍</router-link></li>
        <li><router-link :to="{name: 'two'}" active-class="active">邀请居民</router-link></li>
        <li><router-link :to="{name: 'three'}" active-class="active">居民报名</router-link></li>
        <li><router-link :to="{name: 'last'}" active-class="active">活动总结</router-link></li>
    </ul>
    <router-view></router-view>
    <!-- <el-tabs type="card">
        <el-tab-pane label="活动介绍" name="first">
            <introduce></introduce>
        </el-tab-pane>
        <el-tab-pane label="邀请居民" name="second">
            邀请居民
            <invite></invite>
        </el-tab-pane>
        <el-tab-pane label="居民报名" name="third">
            <el-table
                ref="multipleTable"
                :data="tableData3"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                label="居民姓名"
                width="120">
                <template slot-scope="scope">{{ scope.row.name }}</template>
                </el-table-column>
                <el-table-column
                prop="number"
                label="联系电话"
                width="120">
                </el-table-column>
                <el-table-column
                prop="address"
                label="短信通知"
                show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                prop=""
                label="报名备注"
                show-overflow-tooltip>
                </el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="活动总结" name="fourth">
            <div class="load">
                <div class="column-name">
                    <input type="text" placeholder="请输入栏目名称">
                    <span>编辑</span>
                    <span>添加栏目</span>
                    <span>预览</span>
                    <span>删除</span>
                </div>
                <div class="upload-box">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </div>
                <p class="prompt">图片格式: jpg 图片大小: 小于200k 建议尺寸: 宽度大于800px</p>
            </div>
        </el-tab-pane>
    </el-tabs> -->
  </div>
</template>

<script>
// import invite from './invite/invite.vue';
import introduce from './introduce/introduce.vue';
export default {
    name: 'huodong',
    components: {
        introduce
    },
    methods: {
    }
}
</script>

<style scoped>
.active{
    background: #ffffff;
}
.activity{
    margin-top: 20px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 10px;
}
.tab{
    width: 100%;
    height: 35px;
    border: 1px solid #eee;
}
.tab li{
    float: left;
    line-height: 30px;
    border-right: 1px solid #eee;
}
.tab li a{
    display: block;
    padding: 0 20px;
    text-align: center;
}
</style>


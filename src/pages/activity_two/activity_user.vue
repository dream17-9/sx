<template>
  <div class="userlist-box" v-loading="deleteLoading">
      <el-table
        ref="multipleTable"
        :data="$store.state.residentList"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
        type="selection"
        width="55">
        </el-table-column>
        <el-table-column
        label="居民姓名"
        prop="name"
        width="120">
        <!-- <template slot-scope="scope">{{ scope.row.name }}</template> -->
        </el-table-column>
        <el-table-column
        prop="phone"
        label="联系电话"
        width="120">
        </el-table-column>
        <el-table-column
        prop="sex"
        label="性别"
        show-overflow-tooltip>
        </el-table-column>
        <el-table-column
        prop="age"
        label="年龄"
        show-overflow-tooltip>
        </el-table-column>
        <el-table-column
        prop="msg"
        label="备注信息"
        show-overflow-tooltip>
        </el-table-column>
        <el-table-column
        label="操作"
        show-overflow-tooltip>
        <template slot-scope="scope">
            <span @click="remark(scope.row)" class="bg">备注</span>
            <span @click="check_file(scope.row)" class="bg">查看详情</span>
            <span @click="del_user(scope.row)" class="bg">删除</span>
        </template>
        </el-table-column>
    </el-table>
    <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :total="100">
    </el-pagination>
  </div>
</template>

<script>
import bus from '../../../bus.js';
import {getCookie} from '../../utils/utils.js';
export default {
    name: 'act_user',
    data: () => {
        return {
            page: 1,
            deleteLoading: false
        }
    },
    created () {
        this.$store.dispatch('updata_resident_list', this.page);
    },
    methods: {
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleCurrentChange (page) {
            this.$store.dispatch('updata_resident_list', page);
            this.page = page;
        },
        del_user (row) {
            let that = this;
            // this.deleteLoading = true;
            this.$msgbox({
                title: '操作提示',
                message: '确定要删除此用户',
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                beforeClose: (action, instance, done) => {
                    if (action === 'confirm') {
                        this.$http.post('/admin/delete/user', {id: row.id, token: getCookie('token')}).then(res => {
                // this.deleteLoading = false;
                    if (res.data.code === 1001) {
                        this.$msgbox({
                            title: 'error',
                            message: res.data.message,
                            showCancelButton: true,
                            confirmButtonText: '重新登录',
                            cancelButtonText: '取消',
                            beforeClose: (action, instance, done) => {
                                            if (action === 'confirm') {
                                                that.$router.push({
                                                    name: 'login',
                                                    query: {
                                                        from: this.$route.path
                                                    }
                                                }); 
                                            }
                                            done();
                                        }
                                    }).catch (e => {
                                        console.log(e);
                                    })
                                }
                                if (res.data === 'success') {
                                    this.$store.dispatch('updata_resident_list', this.page);
                                }
                            });
                        }
                        done();
                    }
            }).catch(e => {
                console.log(e);
            });
        },
        check_file (row) {
            console.log(row);
            this.$alert('姓名:' + row.name + ',' + '性别:' + row.sex + ',' + '年龄:' + row.age + ',' + '手机号码:' + row.phone, '用户信息');
        },
        remark (row) {
            bus.$emit('isShow', {flag: true, id: row.id, page: this.page});
        }
    }
};
</script>

<style scoped>
.bg{
    color: #1ab5b5;
    cursor: pointer;
}
.el-pagination{
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
}
</style>

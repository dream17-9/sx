<template>
  <div class="persobox">
      <h1>报名名单</h1>
      <el-table
        ref="multipleTable"
        :data="$store.state.personList"
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
        width="250">
        <!-- <template slot-scope="scope">{{ scope.row.name }}</template> -->
        </el-table-column>
        <el-table-column
        prop="phone"
        label="联系电话"
        width="250">
        </el-table-column>
        <el-table-column
        prop="msg"
        label="备注信息"
        width="250"
        show-overflow-tooltip>
        </el-table-column>
        <el-table-column
        label="操作"
        width="250"
        show-overflow-tooltip>
        <template slot-scope="scope">
            <span @click="del_user(scope.row)" class="bg">删除</span>
        </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    name: 'personnel',
    data: () => {
        return {
        };
    },
    created () {
        this.$store.dispatch('updata_person_list');
    },
    methods: {
        del_user (row) {
            this.$msgbox({
                title: '操作提示',
                message: '确定要删除此用户',
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                beforeClose: (action, instance, done) => {
                    if (action === 'confirm') {
                        this.$http.post('/admin/del/person', {id: row.code}).then((res) => {
                            if (res.data === 'success') {
                                this.$store.dispatch('updata_person_list');
                            }
                        });
                        done();
                    } else {
                        done();
                    }
                }
            }).catch((err) => {
                console.log('错误信息');
            })
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
};
</script>

<style scoped>
.persobox{
    width: 100%;
    height: 100%;
    background: #fff;
}
h1{
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0;
    padding-left: 10px;
}
.cell{
    text-align: center;
}
.bg{
    color: #01b0b9;
    cursor: pointer;
}
</style>

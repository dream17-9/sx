<template>
<div class="mark" v-if="flag">
    <div class="mark-cont">
        <div class="mark-title">
            <span></span>
            <h2>添加居民</h2>
            <span class="el-icon-close" @click="close"></span>
        </div>
        <div class="search-user">
            <span>居民信息</span>
            <input type="text" placeholder="请输入用户名或手机号" v-model.trim="username">
            <button @click="search(username)">查询</button>
        </div>
        <el-table
            v-if="shows"
            ref="multipleTable"
            :data="tableData"
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
            prop="phone"
            label="联系电话"
            width="120">
            </el-table-column>
            <el-table-column
            prop="address"
            label="短信通知"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="msg"
            label="报名备注"
            show-overflow-tooltip>
            </el-table-column>
        </el-table>
    </div>
</div>
</template>

<script>
import bus from '../../../bus.js';
export default {
    name: 'mark',
    data() {
        return {
            flag: false,
            shows: false,
            username: '',
            tableData: [],
            multipleSelection: []
        };
    },
    methods: {
        search (name) {
            if (!name) {
                this.$alert('请输入要查询的用户', '提示信息');
                return;
            }
            this.$http.post('/admin/search/user', {
                name: name
            }).then((res) => {
                this.shows = true,
                this.tableData = res.data;
                this.username = '';
            });
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        close () {
            this.flag = !this.flag;
        }
    },
    mounted () {
        let that = this;
        bus.$on('isShow_add', (val) => {
            that.flag = val;
        });
    }
};
</script>

<style scoped>
.mark{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
}
.mark-cont{
    width: 700px;
    height: 400px;
    background: #fff;
    position: absolute;
    overflow: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    box-sizing: border-box;
}
.mark-title{
    width: 100%;
    height: 40px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    flex-shrink: 0;
}
.mark-title{
    font-size: 16px;
    font-weight: bold;
    background: #20c3c3;
    color: #fff;
}
.search-user{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    align-items: center;
}
.search-user span{
    font-size: 14px;
    font-weight: bold;
    padding: 0 10px;
}
.search-user input{
    padding: 5px 10px;
}
.search-user button{
    background: red;
    color: #fff;
    padding: 5px 20px;
    border: none;
    margin-left: 10px;
}
</style>

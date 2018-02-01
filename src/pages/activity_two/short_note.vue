<template>
  <div class="mark" v-if="verify_show">
    <div class="mark-cont">
        <div class="mark-title">
            <span></span>
            <h2>添加居民</h2>
            <span class="el-icon-close" @click="close"></span>
        </div>
        <div class="search-user">
            <span>居民信息</span>
            <input type="text" placeholder="请输入用户名或手机号">
            <button>查询</button>
        </div>
    </div>
</div>
</template>

<script>
import bus from '../../../bus.js';
export default {
    name: 'short',
    data: () => {
        return {
            verify_show: false
        };
    },
    methods: {
        close () {
            this.verify_show = !this.verify_show;
        }
    },
    mounted () {
        bus.$on('isShow_verify', (val) => {
            this.verify_show = val;
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
    height: 150px;
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

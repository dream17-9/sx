<template>
    <div class="mark" v-if="flag">
        <div class="remarkbox">
            <div class="tit">
                <span></span>
                <h2>添加备注</h2>
                <span class="el-icon-close" @click="close"></span>
            </div>
            <input type="text" v-model="remarkText" @keyup.enter="add_remark">
            <button @click="add_remark">添加</button>
        </div>
    </div>
</template>

<script>
import bus from '../../../bus.js';
export default {
    name: 'remark',
    data: () => {
        return {
            flag: false,
            id: null,
            remarkText: '',
            page: 1
        };
    },
    mounted () {
        bus.$on('isShow', (val) => {
            this.flag = val.flag;
            this.id = val.id;
            this.page = val.page;
        });
    },
    methods: {
        add_remark () {
            this.$http.post('/admin/updata/remark', {content: this.remarkText, id: this.id}).then((res) => {
                if (res.data === 'success') {
                    this.$store.dispatch('updata_resident_list', this.page);
                    this.flag = !this.flag;
                }
            });
        },
        close () {
            this.flag = !this.flag;
        }
    }
};
</script>

<style scoped>
.mark{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
}
.remarkbox{
    width: 847px;
    height: 240px;
    background: #fff;
    position: absolute;
    left: 0;top: 0;right: 0;bottom: 0;
    margin: auto;
    box-sizing: border-box;
}
.tit{
    width: 100%;
    height: 40px;
    background:#00afba;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
}
h2{
    font-size: 18px;
    font-weight: bold;
}
.remarkbox input{
    display: block;
    width: 80%;
    height: 50px;
    margin: 40px auto;
}
.remarkbox button{
    padding: 15px 80px;
    border: none;
    background: #00afba;
    color: #fff;
    margin: 0 auto;
    display: block;
}
</style>

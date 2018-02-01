<template>
  <div class="aside">
    <el-col :span="24">
        <div class="title">
            <h1>三鑫智慧社区</h1>
            <h3>公共管理平台</h3>
            <dl class="protail">
                <dt><img src="../../../static/img/aa.jpg" alt=""></dt>
                <dd>管理员</dd>
            </dl>
        </div>
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#29282e"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu :index="i.toString()" v-for="(v, i) in $store.state.menu" :key="i">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{v.name}}</span>
            </template>
            <el-submenu :index="i + '-' + i_sub" v-for="(v_sub, i_sub) in v.submenus" :key="i_sub">
                <template slot="title">{{v_sub.name}}</template>
                <el-menu-item @click="menuClick(v_sub_sub.name, v_sub_sub.type)" :index="i + '-' + i_sub + '-' + i_sub_sub" v-for="(v_sub_sub, i_sub_sub) in v_sub.submenus" :key="i_sub_sub">{{v_sub_sub.name}}</el-menu-item>
            </el-submenu>
        </el-submenu>
        </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
    name: 'menu',
    data: () => {
        return {
            menu: []
        };
    },
    methods: {
        menuClick (name, type) {
            this.$store.commit('updata_menu_name', name);
        }
    },
    mounted () {
        // this.$http.get('/menu/menulist').then(res => {
        //     console.log(res.data);
        //     this.menu = res.data.data;
        // });
    }
}
</script>

<style scoped>
.title{
    background: #29282e;
    color: #fff;
    text-align: center;
}
.title h1{
    font-size: 24px;
    padding-top: 20px;
}
.title h3{
    font-size: 16px;
    padding: 10px;
}
.protail dt img{
    width: 30%;
    height: 30%;
    border-radius: 50%;
}
.protail dd{
    padding: 10px 0;
}
.aside{
    background: #29282e;
    height: 100%;
}
</style>

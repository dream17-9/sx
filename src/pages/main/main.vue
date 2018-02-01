<template>
    <div class="navTops">
        <el-row class="top-menu">
            <el-col :span="16">
                <el-menu class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1" @click="onece">一口式管理平台</el-menu-item>
                    <el-menu-item index="2" @click="twoce">网格化管理平台</el-menu-item>
                    <el-menu-item index="3" @click="publics">公共服务管理平台</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="8">
                <el-menu class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-menu-item index="3">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">管理员: {{$store.state.user_name}}</template>
                        <el-menu-item index="2-1" @click="loginout">退出</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
        <el-row class="srh">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>......</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/' }">{{$store.state.menu_name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <router-view></router-view>
    </div>
</template>

<script>
import { delCookie } from '../../utils/utils'
export default {
    name: 'main',
    methods: {
        onece () {
            this.$router.push({name: 'entry'});
        },
        twoce () {
            this.$router.push({name: 'grid'});
        },
        publics () {
            this.$router.push({name: 'public'});
        },
        loginout () {
            delCookie('token');
            this.$router.push({name:'login'});
        }
    }
}
</script>

<style scoped>
.srh{
    padding: 20px 0;
    margin-left: 10px;
}
.navTops{
    width: 100%;
    background: #ccc;
    float: left;
    box-sizing: border-box;
}
.top-menu{
    box-shadow: 0px 3px 2px #ccc;
}

</style>

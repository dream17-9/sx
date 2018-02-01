<template>
    <div class="public-box">
        <el-row class="tab-btn">
            <el-button @click="to_message">信息管理</el-button>
            <el-button @click="to_activity">活动管理</el-button>
        </el-row>
        <router-view></router-view>
        <!-- <message :flag="flag"></message>
        <activity :flags="flags"></activity> -->
    </div>
</template>

<script>
import message from '../messages/messages.vue';
import activity from '../activity/activity.vue';
export default {
    name: 'public',
    data: () => {
        return {
        }
    },
    components: {
        message,
        activity
    },
    methods: {
        to_message () {
            this.$router.push({name: 'message'});
        },
        to_activity () {
            this.$router.push({name: 'activity'});
        },
        onece () {
            console.log('one');
        }
    },
    created () {
        this.$http.get('/admin/menu/public').then(res => {
            this.$store.commit('updata_menu', res.data.data);
        });
    }
}
</script>

<style scoped>
.public-box{
    padding: 0;
}
.tab-btn{
    text-align: center;
}
</style>

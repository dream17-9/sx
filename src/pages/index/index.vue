<template>
<div class="bigbox">
    <el-container>
        <sx-menu></sx-menu> 
        <sx-main></sx-main>
    </el-container>
</div>
</template>

<script>
import sx_menu from '../menu/menu.vue';
import sx_main from '../main/main.vue';
export default {
    name: 'index',
    components: {
        "sx-menu": sx_menu,
        "sx-main": sx_main
    }
};
</script>

<style scoped>
.bigbox{
    width: 100%;
    height: 100%;
}
</style>

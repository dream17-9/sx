<template>
  <div>grid</div>
</template>

<script>
export default {
    name: 'grid',
    created () {
        this.$http.get('/admin/menu/grid').then(res => {
            this.$store.commit('updata_menu', res.data.data);
        });
    }
};
</script>

<style>

</style>

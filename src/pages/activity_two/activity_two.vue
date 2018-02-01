<template>
  <div class="two">
      <div class="two-top">
          <h1>邀请名单</h1>
          <!-- 弹框 -->
          <span class="dialong-btn" @click="add">添加居民</span>
          <add-mark></add-mark>
          <span class="dialong-btn" @click="verify">短信通知</span>
          <short-mark></short-mark>
          <remark></remark>
          <act-user></act-user>
      </div>                
  </div>
</template>

<script>
import bus from '../../../bus.js';
import add_mark from './add_resident.vue';
import short_note from './short_note.vue';
import act_user from './activity_user.vue';
import remark from './remark.vue';
export default {
    name: 'two',
    components: {
        'add-mark': add_mark,
        'short-mark': short_note,
        'act-user': act_user,
        'remark': remark
    },
    data () {
        return {
            flag: true,
            verify_flag: true
        };
    },
    methods: {
        add () {
            bus.$emit('isShow_add', this.flag);
        },
        verify () {
            bus.$emit('isShow_verify', this.verify_flag);
        }
    }
};
</script>

<style scoped>
.two{
    width: 100%;
    background: #fff;
    box-sizing: border-box;
}
.two .two-top {
    padding: 20px 0;
    padding-left: 20px;
}
.two .two-top h1{
    font-weight: bold;
    font-size: 20px;
    float: left;
}
.dialong-btn{
    color: #1ab5b5;
    line-height: 25px;
    padding-left: 10px;
}
</style>
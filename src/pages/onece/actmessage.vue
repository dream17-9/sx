<template>
  <div class="actmsgbox" v-loading="actmsgloading">
      <div class="msg">
          <h1>活动信息</h1>
          <p>活动地点:社区居委会活动室</p>
          <p>温馨提示:请带有效证件前往，如身份证</p>
      </div>
      <div class="signbox">
          <h1>居民报名</h1>
          <div class="namebox">
              <h6>居民姓名*</h6>
              <input type="text" v-model.trim="name" placeholder="请输入姓名">
          </div>
          <div class="phonebox">
              <h6>居民电话*</h6>
              <input type="text" v-model.trim="phone" placeholder="请输入电话">
          </div>
          <div class="commentbox">
              <h6>备注信息*</h6>
              <input type="text" v-model.trim="msg" placeholder="请输入备注信息">
          </div>
          <div class="subbtn">
              <button @click="submit">报名</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'actmsg',
    data: () => {
        return {
            name: '',
            phone: '',
            msg: '',
            code: '',
            actmsgloading: false
        }
    },
    methods: {
        submit () {
            let that = this;
            let str = /^1[3|4|5|8][0-9]\d{4,8}$/;
            if (!str.test(this.phone) || this.phone.length !== 11) {
                this.$alert('请输入正确的手机号', '提示信息');
                return;
            }
            if (!this.name || !this.phone || !this.msg) {
                this.$alert('请填写完整的报名信息', 'error');
                return;
            }
            this.code = Math.floor(Math.random () * 99999);
            this.actmsgloading = true;
            this.$http.post('/admin/user/sign', {
                code: this.code,
                name: this.name,
                phone: this.phone,
                msg: this.msg
            }).then((res) => {
                setTimeout(function () {
                    that.actmsgloading = false;
                    if (res.data === 'success') {
                        that.name = '';
                        that.phone = '';
                        that.msg = '';
                        that.$alert('报名成功', 'success');
                    }
                }, 2000);
            });
        }
    }
};
</script>

<style scoped>
.actmsgbox{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    float: left;
}
.msg{
    width: 100%;
    height: 140px;
    background: #fff;
    box-sizing: border-box;
    padding: 0 10px;
    float: left;
}
.msg h1{
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0;
}
.msg p{
    font-weight: bold;
    font-size: 14px;
    padding-top: 10px;
}
.signbox{
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    margin-top: 20px;
    padding: 0 10px;
    float: left;
}
.signbox h1{
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0; 
}
.namebox{
    width: 48%;
    float: left;
}
.namebox h6{
    color: #999;
    padding: 5px 0;
}
.namebox input{
    width: 99.9%;
    height: 30px;
    box-sizing: border-box;
    padding-left: 5px;
}
.phonebox{
    width: 48%;
    margin-left: 4%;
    float: left;
}
.phonebox h6{
    color: #999;
    padding: 5px 0;
}
.phonebox input{
    width: 99.9%;
    height: 30px;
    box-sizing: border-box;
    padding-left: 5px;
}
.commentbox{
    width: 100%;
    float: left;
}
.commentbox h6{
    color: #999;
    padding: 5px 0;
}
.commentbox input{
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    padding-left: 5px;
}
.subbtn{
    width: 100%;
    padding: 20px 0;
    float: left;
}
.subbtn button {
    padding: 10px 60px;
    color: #fff;
    background: #01b0b9;
    border: none;
    border-radius: 5px;
    margin: 0 auto;
    display: block;
}
</style>

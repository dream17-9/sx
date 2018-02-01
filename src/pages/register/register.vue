<template>
  <div class="register">
      <div class="user">
          <span>用户名:</span>
          <input type="text" placeholder="请输入用户名" v-model="username">
      </div>
      <div>
          <span>密&nbsp;&nbsp;&nbsp;码:</span>
          <input type="text" placeholder="请输入密码" v-model="password">
      </div>
      <div><button @click="go_to_register">注册</button></div>
  </div>
</template>

<script>
export default {
    name: 'register',
    data : () => {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        go_to_register () {
            this.$http.post('/admin/registerUser', {
                user_name: this.username,
                user_password: this.password
            }).then((res) => {
                console.log(res);
            });
        }
    }
};
</script>

<style scoped>
.register{
    width: 700px;
    height: 400px;
    border: 1px solid #333;
    box-shadow: 5px 5px 5px #ccc;
    position: absolute;
    left: 0;top: 0;right: 0;bottom: 0;
    margin: auto;
    padding: 0 30px;
    box-sizing: border-box;
}
.register .user{
    padding-top: 80px;
}
.register div{
    padding: 20px;
    text-align: center;
}
.register span{
    font-size: 18px;
    font-weight: bold;
}
.register div input{
    height: 30px;
    width: 300px;
    margin-left: 10px;
    padding: 0 20px;
}
button{
    width: 260px;
    height: 40px;
}
</style>
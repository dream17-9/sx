<template>
<div class="login-box" v-loading="$store.state.loading">
  <div class="login" >
      <div class="user">
          <span>用户名:</span>
          <input type="text" placeholder="请输入用户名" v-model.trim="username">
      </div>
      <div>
          <span>密&nbsp;&nbsp;&nbsp;码:</span>
          <input type="password" placeholder="请输入密码" v-model.trim="password">
      </div>
      <div><button @click="go_to_login">登录</button></div>
  </div>
</div>
</template>

<script>
import { setCookie } from '../../utils/utils'
export default {
    name: 'login',
    data : () => {
        return {
            username: '',
            password: '',
            loading: false
        };
    },
    methods: {
        go_to_login () {
            let path = this.$route.query.from || '/';
            this.$store.commit('updata_loading', true);
            this.$http.post('/admin/loginUser', {
                user_name: this.username,
                user_password: this.password
            }).then(({data}) => {
                console.log(data);
                setTimeout(() => {
                    if(data.code == '1'){
                        setCookie('token', data.token);
                        this.$store.commit('update_user_name', this.username);
                        this.$router.push({ path: path});
                    }else{
                        this.$alert(data.msg, '登录信息有误', {
                            confirmButtonText: '确定',
                            callback: action => {
                                this.username='';
                                this.password=''
                            }
                        });
                        this.$store.commit('updata_loading', false);
                    } 
                },2000)
                
            });
        }
    },
    mounted: function () {
        
    }
};
</script>

<style scoped>
.login-box{
    width: 100%;
    height: 100%;
    background: #ccc;
}
.login{
    width: 700px;
    height: 400px;
    background: #fff;
    border: 1px solid #333;
    box-shadow: 5px 5px 5px #eee;
    position: absolute;
    left: 0;top: 0;right: 0;bottom: 0;
    margin: auto;
    padding: 0 30px;
    box-sizing: border-box;
}
.login .user{
    padding-top: 80px;
}
.login div{
    padding: 20px;
    text-align: center;
}
.login span{
    font-size: 18px;
    font-weight: bold;
}
.login div input{
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

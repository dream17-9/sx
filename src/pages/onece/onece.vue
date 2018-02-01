<template>
  <div class="onece">
      <div class="onece-content">
          <div class="act-list">
              <h1>活动列表</h1>
              <!-- 走马灯 -->
              <!-- <div class="block">
                    <el-carousel trigger="click" height="150px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                    </el-carousel>
              </div> -->
              <div class="banner">
                  <div class="swiper-container blocks">
                        <div class="swiper-wrapper">
                            <div v-for="(v, i) in dataList" :key="i" class="swiper-slide">
                                <p>{{v.name}}</p>
                                <h6 class="time">活动时间: {{v.startDate}}至{{v.endDate}}</h6>
                            </div>
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
              </div>
          </div>
          <div class="tab-btn">
              <router-link active-class="active" :to="{name: 'actmessage'}">活动信息与报名</router-link>
              <router-link active-class="active" :to="{name: 'personnel'}">人员管理</router-link>
          </div>
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import '../../libs/swiper.css';
import Swiper from '../../libs/swiper.min.js';
export default {
    name: 'entry',
    data: () => {
        return {
            dataList: []
        }
    },
    created () {
        this.$http.get('/admin/menu/entry').then(res => {
            this.$store.commit('updata_menu', res.data.data);
        });
    },
    mounted () {
        this.$http.post('/getActData').then((res) => {
            this.dataList = res.data.list; 
        });
        setTimeout(() => {
            new Swiper('.blocks', {
                loop: true,
                autoplay: 2000,
                slidesPerView :'auto' ,
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
            })
        }, 2000);
    }
}
</script>

<style scoped>
.onece{
    width: 100%;
    background: #ccc;
    padding: 0 10px;
    box-sizing: border-box;
}
.onece .onece-content{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
.act-list{
    width: 100%;
    height: 230px;
    background: #fff;
    padding: 0 2px;
}
.act-list h1{
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0;
    padding-left: 10px;
}
.banner{
    width: 100%;
    height: 140px;
}
.blocks{
    width: 1000px;
    height: 100%;
    border: 1px solid #ccc;
}
.blocks .swiper-slide{
    width: 275px;
    height: 100%;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.blocks .swiper-slide p{
    text-align: center;
    font-weight: bold;
    font-size: 14px;
}
.blocks .swiper-slide h6{
    font-weight: bold;
    font-size: 14px;
    padding-top: 20px;
} 
/* .banner .swiper-slide{
    width: 100%;
    height: 100%;
} */
.tab-btn{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
}
.tab-btn a{
    margin-left: 20px;
    width: 150px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border:1px solid #000;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
}
.active{
    color: #fff;
    background:#01b0b9;
}
</style>

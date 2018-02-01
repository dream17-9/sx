<template>
  <div class="address-box">
    <el-select v-model="province" placeholder="请选择" @change="changePro(province)">
        <el-option
        v-for="(item, index) in data"
        :key="index"
        :value="item.name">
        </el-option>
    </el-select>
    <el-select v-model="city" placeholder="请选择" @change="changeCity(city)">
        <el-option
        v-for="(item, index) in cityList"
        :key="index"
        :value="item.name">
        </el-option>
    </el-select>
    <el-select v-model="area" placeholder="请选择" @change="changeArea(area)">
        <el-option
        v-for="(item, index) in areaList"
        :key="index"
        :value="item">
        </el-option>
    </el-select>
    <!-- <el-select v-model="value4" placeholder="请选择">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select> -->
  </div>
</template>

<script>
export default {
    name: 'address',
    props: {
        data: {
            required: true,
            type: Array
        }
    },
    data: () => {
        return {
            province: '',
            city: '',
            cityList: [],
            area: '',
            areaList: []
        }
    },
    methods: {
        changePro (val) {
            this.data.forEach((item, i) => {
                if (item.name === val) {
                    this.cityList = item.city
                }
            });
            this.city = '',
            this.area = ''
        },
        changeCity (val) {
            this.cityList.forEach((item, i) => {
                if (item.name === val) {
                    this.areaList = item.area
                }
            });
            this.area = ''
        },
        changeArea (val) {
            this.area = val;
            this.collectInfo();
        },
        collectInfo  () {
            if (this.province && this.city && this.area) {
                this.$emit('info', {
                    prov: this.province,
                    city: this.city,
                    area: this.area
                })
            }
        }
    }
};
</script>

<style scoped>
.address-box{
    margin-top: 5px;
}
.el-select{
    width: 24.5%;
}
</style>

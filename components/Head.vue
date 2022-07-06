<template>
  <div class="header-flex header">
    <div class="header-left">
      <div class="city-box">
        <img class="img-box" src="../static/icon/city.png">
        <span class="name">{{ baseInfo.city }}</span>
      </div>
      <div class="project-name">{{ baseInfo.houseName }}</div>
    </div>
    <div>
      <div class="header-right header-flex">
        <div class="project-box ">
          <div class="color-box"></div>
          <div class="project">{{ project }}</div>
        </div>
        <div class="cycle">
          <span class="name">报告数据分析周期：</span>
          <span class="value">{{ baseInfo.period }}</span>
        </div>
        <div class="logo">
          <img class="logo-img" src="../static/icon/logo.png">
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Head",
  props: {
    // 项目
    project: {
      type: String,
      default: '项目信息'
    },

  },
  // 数据
  data() {
    return {
      imgUrl: '@/static/icon/city.png'
    }
  },
  // 计算属性
  computed: {
    reportData() {
      return this.$store.state.reportData
    },
    baseInfo() {
      return this.reportData.baseInfo || {}
    },

  },
  // 创建
  created() {

  },
  mounted() {

  },
  // 方法
  methods: {
  },
  // 子组件
  components: {
  }
}
</script>
<!--当前页面的样式 -->
<style scoped>
.header {
  height: 82px;
}

.header-flex {
  background: #f3f5fa;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: end;
  -webkit-box-pack: center;
}

.header-left {
  font-size: 16px;
  font-weight: 600;
  -webkit-box-flex: 1;
  color: #0F1326;
  line-height: 16px;
  margin-left: 40px;
}

.header-right {
  -webkit-box-flex: 5;
}

.name {
  width: 98px;
  height: 14px;
  font-size: 14px;
  font-weight: 400;
  color: #454957;
  line-height: 14px;

}

.value {
  width: 196px;
  height: 14px;
  font-size: 14px;
  font-weight: 600;
  color: #0F1326;

}

.line {
  width: 1265px;
  height: 1px;
  background: #CED4E0;
  margin-right: 40px;
}

.project-box {
  margin-bottom: 14px;
  -webkit-box-flex: 1;
}

.color-box {
  /*-webkit-box-flex:4;*/
  display: inline-block;
  margin-right: 14px;
  width: 6px;
  height: 24px;
  background: #5290F7;
  line-height: 24px;
}

.project {
  display: inline-block;
  min-width: 100px;
  height: 24px;
  font-size: 24px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #0F1326;
  line-height: 24px;
}

.project-name {
  /*width: 150px;*/
  height: 30px;
  font-size: 30px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #0B1026;
  line-height: 30px;
}

.name {
  height: 14px;
  font-size: 14px;
  font-weight: 400;
  color: #454957;
  line-height: 14px;

}

.value {
  height: 14px;
  font-size: 14px;
  font-weight: 600;
  color: #0F1326;

}

.cycle {
  -webkit-box-flex: 1;
  margin-bottom: 26px;
  display: -webkit-box;
  -webkit-box-pack: end;
  margin-right: 50px;
  width: 100px;
  height: 24px;
  font-size: 24px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #0F1326;
  line-height: 24px;
}

.city-box {
  margin-bottom: 7px;
}

.img-box {
  width: 16px;
  height: 18px;
  margin-right: 5px;
}

.logo {
  width: 149px;
  height: 35px;
  margin-right: 40px;
  margin-bottom: 13px;
}

.logo-img {
  /*image-*/
  width: 100%;
  height: auto;
}
</style>

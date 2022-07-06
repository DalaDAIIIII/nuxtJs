<template>
  <div class="footer" :style="`--data-bgc: ${bgc}`" data-bgc="#fff">
    <div class="company_url">
      goingdata.cric.com
    </div>
    <div class="company_item">
      <span class="name">报告解锁企业：</span>
      <span class="value">{{orderDetailPdf.receiveSide}}</span>
    </div>

    <div class="company_item">
      <span class="name">解锁账号：</span>
      <span class="value">{{orderDetailPdf.submitAccount}}</span>
    </div>
    <div class="company_item">
      <span class="name">订单编号：</span>
      <span class="value">{{orderDetailPdf.orderId}}</span>
    </div>
    <div class="company_item">
      <span class="name">解锁时间：</span>
      <span class="value">{{orderDetailPdf.completeTime}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer.vue",
  props: {
    // 当前定位城市
    unlockCompany: {
      type: String,
      default: ''
    },
    bgc: {
      type: String,
      default: '#FFF'

    }
  },
  // 计算属性
		computed: {
      reportData() {
        return this.$store.state.reportData
      },
      orderDetailPdf() {
        return this.reportData.orderDetailPdf || {}
      },

		},
  
}
</script>

<style  scoped>
.footer {
  height: 54px;
  background: var(--data-bgc);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: center;
  -webkit-box-pack: center;
}

.company_url {
  height: 16px;
  font-size: 16px;
  font-weight: 600;
  -webkit-box-flex: 1;
  color: #0f1326;
  line-height: 16px;
  -webkit-box-align: center;
  margin-left: 40px;
  margin-right: 200px;
}
.company_item {
  -webkit-box-flex: 1;
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
  color: #0f1326;
}
</style>

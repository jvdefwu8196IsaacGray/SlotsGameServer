<template>
  <div class="page-header-index-wide">

	<a-card v-if="loading" :bordered="false">
	  <div style="width: 100%; text-align: center;">
		<a-spin style="margin-top: 300px; margin-bottom: 300px; ">
		  <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
		</a-spin>
	  </div>
	</a-card>

	<div v-else>

	  <div style="float: left; width: 100%;">
		<a-row :gutter="24">
		  <a-col :sm="24" :md="12" :xl="4" :style="{ marginBottom: '24px' }">
			<a-card
			  :bordered="false"
			  style="float: left; width: 100%; height: 181px; color: #111; font-size: 16px;"
			>
			  <div style="text-align: center; margin-top: 16px;">
				<a href="/#/admin/manage/user" style="text-align: center; font-size: 36px;">{{v1}}</a>
			  </div>
			  <div style="text-align: center; font-size: 18px; color: #666; margin-top: 10px;">总玩家数</div>
			</a-card>
		  </a-col>
		  <a-col :sm="24" :md="12" :xl="4" :style="{ marginBottom: '24px' }">
			<a-card
			  :bordered="false"
			  style="float: left; width: 100%; height: 181px; color: #111; font-size: 16px;"
			>
			  <div style="text-align: center; margin-top: 16px;">
				<a href="/#/admin/index" style="text-align: center; font-size: 36px;">{{v2}}</a>
			  </div>
			  <div style="text-align: center; font-size: 18px; color: #666; margin-top: 10px;">在线玩家</div>
			</a-card>
		  </a-col>
		  <a-col :sm="24" :md="12" :xl="4" :style="{ marginBottom: '24px' }">
			<a-card
			  :bordered="false"
			  style="float: left; width: 100%; height: 181px; color: #111; font-size: 16px;"
			>
			  <div style="text-align: center; margin-top: 16px;">
				<a href="/#/admin/manage/pay" style="text-align: center; font-size: 36px;">{{v3}}</a>
			  </div>
			  <div style="text-align: center; font-size: 18px; color: #666; margin-top: 10px;">累计充值</div>
			</a-card>
		  </a-col>
		  <a-col :sm="24" :md="12" :xl="4" :style="{ marginBottom: '24px' }">
			<a-card
			  :bordered="false"
			  style="float: left; width: 100%; height: 181px; color: #111; font-size: 16px;"
			>
			  <div style="text-align: center; margin-top: 16px;">
				<a href="/#/admin/manage/cash" style="text-align: center; font-size: 36px;">{{v4}}</a>
			  </div>
			  <div style="text-align: center; font-size: 18px; color: #666; margin-top: 10px;">累计提现</div>
			</a-card>
		  </a-col>
		  <a-col :sm="24" :md="12" :xl="4" :style="{ marginBottom: '24px' }">
			<a-card
			  :bordered="false"
			  style="float: left; width: 100%; height: 181px; color: #111; font-size: 16px;"
			>
			  <div style="text-align: center; margin-top: 16px;">
				<a href="/#/admin/manage/pay" style="text-align: center; font-size: 36px;">{{v5}}</a>
			  </div>
			  <div style="text-align: center; font-size: 18px; color: #666; margin-top: 10px;">今日充值</div>
			</a-card>
		  </a-col>
		  <a-col :sm="24" :md="12" :xl="4" :style="{ marginBottom: '24px' }">
			<a-card
			  :bordered="false"
			  style="float: left; width: 100%; height: 181px; color: #111; font-size: 16px;"
			>
			  <div style="text-align: center; margin-top: 16px;">
				<a href="/#/admin/manage/cash" style="text-align: center; font-size: 36px;">{{v6}}</a>
			  </div>
			  <div style="text-align: center; font-size: 18px; color: #666; margin-top: 10px;">今日提现</div>
			</a-card>
		  </a-col>
		</a-row>
	  </div>
	</div>
  </div>
</template>

<script>

import { out, index } from "@/components/api";

export default {
	name: "ViewIndex",
	data() {
		return {
			v1: 0,
			v2: 0,
			v3: 0,
			v4: 0,
			v5: 0,
			v6: 0,
			marqueen: "1111",
			loading: false,
			username: localStorage.getItem("username") 
		};
	},
	mounted() {
		this.request();
	},
	methods: {

		stopServer() 
		{

		},

		request()
		{
			this.loading  = true;

			index().then((result)=>
			{
				if (result.data.code == 10004) {
				out(this);
				return;
				} else if (result.data.code != 10000) {
				this.$message.info(result.data.message);
				return;
				}
				this.loading = false;
				this.v1 = result.data.data.v1;
				this.v2 = result.data.data.v2;
				this.v3 = result.data.data.v3;
				this.v4 = result.data.data.v4;
				this.v5 = result.data.data.v5;
			});
		}
	}
};
</script>

<style lang="less" scoped>
.extra-wrapper {
  line-height: 55px;
  padding-right: 24px;

  .extra-item {
	display: inline-block;
	margin-right: 24px;

	a {
	  margin-left: 24px;
	}
  }
}

.antd-pro-pages-dashboard-analysis-twoColLayout {
  position: relative;
  display: flex;
  display: block;
  flex-flow: row wrap;

  &.desktop div[class^="ant-col"]:last-child {
	position: absolute;
	right: 0;
	height: 100%;
  }
}

.antd-pro-pages-dashboard-analysis-salesCard {
  height: calc(100% - 24px);
  /deep/ .ant-card-head {
	position: relative;
  }
}

.dashboard-analysis-iconGroup {
  i {
	margin-left: 16px;
	color: rgba(0, 0, 0, 0.45);
	cursor: pointer;
	transition: color 0.32s;
	color: black;
  }
}
.analysis-salesTypeRadio {
  position: absolute;
  right: 54px;
  bottom: 12px;
}
</style>

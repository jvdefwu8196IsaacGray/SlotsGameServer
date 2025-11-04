<template>
  <a-layout
	id="components-layout-demo-custom-trigger"
	style="position: absolute; width: 100%; height: 100%;"
  >
	<a-layout-sider :trigger="null" collapsible v-model="collapsed">
	  <div
		class="logo"
		style="margin-left: 28px; height: 36px; margin-top: 10px; margin-bottom: 10px;"
	  >
		<div
		  style="float: left; line-height: 28px; margin-top: 4px; color: #fff; font-size: 16px;"
		>大满贯管理系统</div>
	  </div>
	  <a-menu theme="dark" mode="inline" :selectedKeys="selectedKeys">
		<a-menu-item key="1">
		  <a href="/#/admin/index">
			<a-icon type="bar-chart" style="font-size: 18px; transform: translate(0,2px);" />
			<span>数据中心</span>
		  </a>
		</a-menu-item>
		<a-menu-item key="2">
		  <a href="/#/admin/manage/user">
			<a-icon type="team" style="font-size: 18px; transform: translate(0,2px);" />
			<span>用户管理</span>
		  </a>
		</a-menu-item>
		<a-menu-item key="3">
		  <a href="/#/admin/manage/cash">
			<a-icon type="transaction" style="font-size: 18px; transform: translate(0,2px);" />
			<span>提现管理</span>
		  </a>
		</a-menu-item>
		<a-menu-item key="4">
		  <a href="/#/admin/manage/pay">
			<a-icon type="money-collect" style="font-size: 18px; transform: translate(0,2px);" />
			<span>充值记录</span>
		  </a>
		</a-menu-item>
		<a-menu-item key="5">
		  <a href="/#/admin/manage/results">
			<a-icon type="history" style="font-size: 18px; transform: translate(0,2px);" />
			<span>开奖记录</span>
		  </a>
		</a-menu-item>
		<a-menu-item key="6">
		  <a href="/#/admin/manage/error">
			<a-icon type="thunderbolt" style="font-size: 18px; transform: translate(0,2px);" />
			<span>错误日记</span>
		  </a>
		</a-menu-item>
	  </a-menu>
	</a-layout-sider>
	<a-layout>
	  <a-layout-header style="background: #fff; padding: 0">
		<!-- <a-icon
		  class="expand"
		  :type="collapsed ? 'menu-unfold' : 'menu-fold'"
		  @click="()=> collapsed = !collapsed"
		/>-->
		<a-dropdown class="dropdown">
		  <span class="action">
			<a-avatar style="margin-right: 6px; backgroundColor:#1890ff" icon="user" />
			<span style="color: #111">{{ this.username}}</span>
		  </span>
		  <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
			<a-menu-item key="0">
			  <a href="javascript:;" @click="handleLogout">
				<a-icon type="logout" />
				<span>退出登录</span>
			  </a>
			</a-menu-item>
		  </a-menu>
		</a-dropdown>
		<a-popconfirm style="float: right;" placement="bottomRight" ok-text="停止" cancel-text="取消" @confirm="stopServer">
			<template slot="title">
			<p>该操作将暂停所有游戏服务, 是否继续?</p>
			</template>
			<a-icon type="fire" style="margin-right: 6px; color:#333;"/>
			<a style="margin-right: 20px; color:#333;">停服维护</a>
		</a-popconfirm>
		<span style="float: right;" >
			<a-icon type="message" style="margin-right: 6px; color:#333;"/>
			<a style="margin-right: 20px; color:#333;">消息通知</a>
		</span>
	  </a-layout-header>
	  <router-view style="margin: 24px;"></router-view>
	</a-layout>
  </a-layout>
</template>
<script>
import moment from "moment";
import ChartCard from "@/components/Charts/ChartCard";
import MiniArea from "@/components/Charts/MiniArea";
import MiniBar from "@/components/Charts/MiniBar";
import RankList from "@/components/Charts/RankList";
import Bar from "@/components/Charts/Bar";
import Trend from "@/components/Charts/Trend";

import {out} from "@/components/api.js";

export default {
  components: {
	ChartCard,
	MiniArea,
	MiniBar,
	RankList,
	Bar,
	Trend
  },
  data() {
	return {
	  selectedKeys: ["1"],
	  collapsed: false,
	  loading: true,
	  username: localStorage.getItem("username")
	};
  },
  created() {
	  if (this.$route.path == "/admin/index") 
		this.selectedKeys = ["1"];
	else if (this.$route.path == "/admin/manage/user")
	  this.selectedKeys = ["2"];
	else if (this.$route.path == "/admin/manage/cash")
	  this.selectedKeys = ["3"];
	else if (this.$route.path == "/admin/manage/pay")
	  this.selectedKeys = ["4"];
	else if (this.$route.path == "/admin/manage/results")
	  this.selectedKeys = ["5"];
	else if (this.$route.path == "/admin/manage/error")
	  this.selectedKeys = ["6"];
  },
  beforeRouteUpdate(to, form, next) {
	console.log(to.path);

	if (to.path == "/admin/index") this.selectedKeys = ["1"];
	else if (to.path == "/admin/manage/user") this.selectedKeys = ["2"];
	else if (to.path == "/admin/manage/cash") this.selectedKeys = ["3"];
	else if (to.path == "/admin/manage/pay") this.selectedKeys = ["4"];
	  else if (to.path == "/admin/manage/results") this.selectedKeys = ["5"];
	else if (to.path == "/admin/manage/error") this.selectedKeys = ["6"];

	next();
  },
  methods: {
	handleLogout()
	{
		out(this);
	}
  }
};
</script>
<style>
.expand {
  color: #111;
  font-size: 18px;
  margin-left: 20px;
}

.expand:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger {
  font-size: 18px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger:hover {
  color: #1890ff;
}

.dropdown {
  float: right;

  padding-left: 20px;

  padding-right: 20px;

  margin-right: 20px;
}

.dropdown:hover {
  background-color: #fafafa;
}
</style>

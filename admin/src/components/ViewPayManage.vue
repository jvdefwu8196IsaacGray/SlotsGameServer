<template>
  <a-card :bordered="false">
	<a-form layout="inline">
	  <a-row>
		<a-form-item label="刷新" style="margin-right: 20px;">
		  <a-button @click="request()">
			<a-icon type="sync" spin />
		  </a-button>
		</a-form-item>
		<a-form-item label="状态">
		  <a-select placeholder="请选择" default-value="0" style="width:100px">
			<a-select-option value="0">全部</a-select-option>
			<a-select-option value="1">未支付</a-select-option>
			<a-select-option value="2">已支付</a-select-option>
		  </a-select>
		</a-form-item>
		<a-form-item label="搜索" style="float: right">
		  <a-input-search
			placeholder="搜索用户名或游戏名或手机号..."
			style="width: 300px"
			@change="onSearch"
			v-model="like"
		  />
		</a-form-item>
		<a-form-item label="搜索" style="float: right">
		  <a-input-search
			placeholder="搜索游戏ID..."
			style="width: 180px"
			@change="onSearch"
			v-model="like"
		  />
		</a-form-item>
	  </a-row>
	</a-form>

	<a-table
	  :loading="loading"
	  :columns="columns"
	  :dataSource="data"
	  :pagination="pagination"
	  @change="handleTableChange"
	  class="components-table-demo-nested"
	  style="margin-top: 30px;"
	>
	  <span slot="user" slot-scope="user">
		<a :href="'/#/admin/manage/user?uid=' + user.id">{{user.username}}<br>{{user.nickname}}<br>[{{user.phone}}] </a><br>
	  </span>

	  <span slot="score" slot-scope="score">
		<p
		  style="float: left; margin-right: 8px; margin-bottom:0px;"
		>{{score.score}} 元</p>
	  </span>

	</a-table>
  </a-card>
</template>

<script>
import moment from "moment";

import { out, pays } from "@/components/api";

import { setTimeout } from "timers";

export default {
  components: {},
  data() {
	return {
	  loading: false,
	  order: "id asc",
	  like: "",
	  uid: "",
	  pagination: {
		current: 1,
		pageSize: 10,
		total: 0
	  },
	  data: [],
	  columns: [
		{
		  title: "编号",
		  dataIndex: "id",
		  sorter: () => {},
		  sortDirections: ["descend", "ascend"]
		},
		{
		  title: "用户信息",
			  scopedSlots: { customRender: "user" },
		  sorter: () => {},
		  sortDirections: ["descend", "ascend"]
		},
		{
		  title: "金额",
			  scopedSlots: { customRender: "score" },
		  sorter: () => {},
		  sortDirections: ["descend", "ascend"]
		},
		{
		  title: "订单号",
		  dataIndex: "order_shop",
		  sorter: () => {},
		  sortDirections: ["descend", "ascend"]
		},
		{
		  title: "流水号",
		  dataIndex: "order_pay",
		  sorter: () => {},
		  sortDirections: ["descend", "ascend"]
		},
		{
		  title: "创建时间",
		  dataIndex: "time_create",
		  sorter: () => {},
		  sortDirections: ["descend", "ascend"]
		},
		{
		  title: "完成时间",
		  dataIndex: "time_pay",
		  sorter: () => {},
		  sortDirections: ["descend", "ascend"]
		},
		{
		  title: "订单状态",
		  dataIndex: "status",
		  sorter: () => {},
		  sortDirections: ["descend", "ascend"]
		},
	  ]
	};
  },
  mounted() {
	if (this.$route.query.uid) this.uid = this.$route.query.uid;
	this.request();
  },
  methods: {
	onSearch(e) {
	  this.request();
	},
	handleTableChange(pagination, filters, sorter) {
	  if (sorter.order)
		this.order = sorter.field + " " + sorter.order.replace("end", "");

	  if (pagination) this.pagination.current = pagination.current;

	  this.request();
	},
	request() {
	  this.loading = true;

	  pays(
		this.pagination.current,
		this.pagination.pageSize,
		this.order,
		this.uid,
		this.like
	  ).then(result => {
		if (result.data.code == 10004) {
		  out(this);
		  return;
		} else if (result.data.code != 10000) {
		  this.$message.info(result.data.message);

		  return;
		}
		setTimeout(() => {
		  const pagination = { ...this.pagination };
		  pagination.total = result.data.total;
		  this.data = result.data.data;
		  this.pagination = pagination;
		  this.loading = false;
		}, 200);
		this.$message.success({ content: "加载完毕...", duration: 1 });
	  });
	}
  }
};
</script>

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
			<a-select-option value="1">未处理</a-select-option>
			<a-select-option value="2">已处理</a-select-option>
		  </a-select>
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
		<a>username</a>
		<a>nickname</a>
		<a>phone</a>
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

import { out, errors } from "@/components/api";

import { setTimeout } from "timers";

export default {
  components: {},
  data() {
	return {
	  loading: false,
	  order: "id asc",
	  like: "",
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
		  title: "错误次数",
		  sorter: () => {},
		  sortDirections: ["descend", "ascend"]
		},
		{
		  title: "错误脚本",
		  dataIndex: "error",
		  sorter: () => {},
		  sortDirections: ["descend", "ascend"]
		},
		{
		  title: "状态",
		  dataIndex: "status",
		  sorter: () => {},
		  sortDirections: ["descend", "ascend"]
		},
	  ]
	};
  },
  mounted() {
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

	  errors(
		this.pagination.current,
		this.pagination.pageSize,
		this.order,
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

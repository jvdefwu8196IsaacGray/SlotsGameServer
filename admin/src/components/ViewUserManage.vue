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
		  <a-select v-model="status" placeholder="请选择" default-value="0" style="width:100px">
			<a-select-option value="0">全部</a-select-option>
			<a-select-option value="1">封号</a-select-option>
			<a-select-option value="2">正常</a-select-option>
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

	<a-drawer
	  title="用户信息"
	  :width="450"
	  :visible="userVisible"
	  :body-style="{ paddingBottom: '80px' }"
	  @close="userVisible=false"
	>
	  <div style="text-align:center; margin-top: 100px;" v-if="!info">
		<a-spin>
		  <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
		</a-spin>
	  </div>

	  <a-form layout="vertical" hide-required-mark v-else>
		<a-row :gutter="16">
		  <p style="float: left; width: 145px; margin-left: 10px; color: #333">用户名</p>
		  <p style="float: left; color: #666">{{info ? info.username : ""}}</p>
		</a-row>
		<a-row :gutter="16">
		  <p style="float: left; width: 145px; margin-left: 10px; color: #333">绑定手机号</p>
		  <p style="float: left; color: #666">{{info ? info.phone : ""}}</p>
		</a-row>
		<a-row :gutter="16">
		  <p style="float: left; width: 145px; margin-left: 10px; color: #333">游戏昵称</p>
		  <p style="float: left; color: #666">{{info ? info.nickname : ""}}</p>
		</a-row>
		<a-row :gutter="16">
		  <p style="float: left; width: 145px; margin-left: 10px; color: #333">当前筹码</p>
		  <p style="float: left; color: #666">{{info ? info.chips : ""}}</p>
		</a-row>
		<a-row :gutter="16">
		  <p style="float: left; width: 145px; margin-left: 10px; color: #333">总充值数</p>
		  <p style="float: left; color: #666">{{info ? info.totalRecharge : ""}}</p>
		</a-row>
		<a-row :gutter="16">
		  <p style="float: left; width: 145px; margin-left: 10px; color: #333">可提现数</p>
		  <p style="float: left; color: #666">{{info ? info.canCash : ""}}</p>
		</a-row>
		<a-row :gutter="16">
		  <p style="float: left; width: 145px; margin-left: 10px; color: #333">总提现数</p>
		  <p style="float: left; color: #666">{{info ? info.totalCash : ""}}</p>
		</a-row>
		<a-row :gutter="16">
		  <p style="float: left; width: 145px; margin-left: 10px; color: #333">当前经验</p>
		  <p style="float: left; color: #666">{{info ? info.exp : ""}}</p>
		</a-row>
		<a-row :gutter="16">
		  <p style="float: left; width: 145px; margin-left: 10px; color: #333">会员等级</p>
		  <p style="float: left; color: #666">{{info ? info.vipLevel : ""}}</p>
		</a-row>
		<a-row :gutter="16">
		  <p style="float: left; width: 145px; margin-left: 10px; color: #333">会员到期时间</p>
		  <p style="float: left; color: #666">{{info ? info.vipTime : ""}}</p>
		</a-row>
		<a-row :gutter="16">
		  <p style="float: left; width: 145px; margin-left: 10px; color: #333">注册时间</p>
		  <p style="float: left; color: #666">{{info ? info.registerTime : ""}}</p>
		</a-row>
		<a-row :gutter="16">
		  <p style="float: left; width: 145px; margin-left: 10px; color: #333">注册IP</p>
		  <p style="float: left; color: #666">{{info ? info.registerIp : ""}}</p>
		</a-row>
		<a-row :gutter="16">
		  <p style="float: left; width: 145px; margin-left: 10px; color: #333">登录时间</p>
		  <p style="float: left; color: #666">{{info ? info.lastLoginTime : ""}}</p>
		</a-row>
		<a-row :gutter="16">
		  <p style="float: left; width: 145px; margin-left: 10px; color: #333">登录IP</p>
		  <p style="float: left; color: #666">{{info ? info.lastLoginIp : ""}}</p>
		</a-row>
		<a-row :gutter="16">
		  <p style="float: left; width: 145px; margin-left: 10px; color: #333">账号状态</p>
		  <p
			style="float: left; color: #666"
		  >{{info ? (info.auth == 0 ? "正常" : (info.auth == 1 ? "封号" : "管理员")) : "-"}}</p>
		</a-row>
	  </a-form>
	</a-drawer>

	<a-modal
	  title="上分"
	  :visible="modalVisible"
	  @ok="onScore"
	  @cancel="modalVisible = false"
	  centered
	>
	<a-form-item
	  label="分数"
	  :label-col="labelCol"
	  :wrapper-col="wrapperCol"
	>
		<a-input
		:value="score"
		placeholder="请输入要上分的分数"
		:max-length="25"
		style="width: 300px"
		/>
	</a-form-item>
	<a-form-item
	  label="备注"
	  :label-col="labelCol"
	  :wrapper-col="wrapperCol"
	>
		<a-input
		:value="comment"
		placeholder="请输入备注(可空)"
		:max-length="25"
		style="width: 300px"
		/>
	</a-form-item>
	</a-modal>

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
		<span display>
		  {{user.username}}
		  <br />
		  {{user.nickname}}
		  <br />
		  [{{user.phone}}]
		</span>
		<br />
	  </span>

	  <span slot="chips" slot-scope="chips">
		<p style="float: left; margin-right: 8px; margin-bottom:0px;">{{chips.chips}}</p>
		<a @click="current=chips.id; modalVisible=true;">(上分)</a>
	  </span>

	  <span slot="cash" slot-scope="cash">
		<p style="float: left; margin-right: 8px; margin-bottom:0px;">{{cash.totalCash}} 元</p>
		<a :href="'/#/admin/manage/cash?uid=' + cash.id">(记录)</a>
	  </span>

	  <span slot="pay" slot-scope="pay">
		<p
		  style="float: left; margin-right: 8px; margin-bottom:0px;"
		>{{pay.totalRecharge}} 元</p>
		<a :href="'/#/admin/manage/pay?uid=' + pay.id">(记录)</a>
	  </span>

	  <span slot="operation" slot-scope="operation">
		<a @click="onInfo(operation.id)">详情</a>
		<a-divider type="vertical" />
		<a v-if="operation.auth==0" @click="onLock(operation.id, true)">封号</a>
		<a disabled="disabled" v-else>封号</a>
		<a-divider type="vertical" />
		<a v-if="operation.auth==1" @click="onLock(operation.id, false)">解封</a>
		<a disabled="disabled" v-else>解封</a>
	  </span>
	</a-table>
  </a-card>
</template>

<script>
import moment from "moment";

import { out, user, lock, score, users } from "@/components/api";

import { setTimeout } from "timers";

export default {
  components: {},
  data() {
	return {
	  info: null,
	  loading: false,
	  userVisible: false,
	  modalVisible: false,
	  labelCol: { span: 2 },
	  wrapperCol: { span: 8, offset: 2},
	  current: -1,
	  score: "",
	  comment: "",
	  status: 0,
	  uid: "",
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
		  title: "ID",
		  dataIndex: "id",
		  sorter: () => {},
		  sortDirections: ["descend", "ascend"]
		},
		{
		  title: "用户信息",
		  sorter: () => {},
		  scopedSlots: { customRender: "user" },
		  sortDirections: ["descend", "ascend"]
		},
		{
		  title: "当前筹码",
		  sorter: () => {},
		  scopedSlots: { customRender: "chips" },
		  sortDirections: ["descend", "ascend"]
		},
		{
		  title: "会员等级",
		  dataIndex: "vipLevel",
		  sorter: () => {},
		  sortDirections: ["descend", "ascend"]
		},
		{
		  title: "总提现",
		  sorter: () => {},
		  scopedSlots: { customRender: "cash" },
		  sortDirections: ["descend", "ascend"]
		},
		{
		  title: "总充值",
		  sorter: () => {},
		  scopedSlots: { customRender: "pay" },
		  sortDirections: ["descend", "ascend"]
		},
		{
		  title: "操作",
		  scopedSlots: { customRender: "operation" }
		}
	  ]
	};
  },
  mounted() {
	if (this.$route.query.uid) this.uid = this.$route.query.uid;
	this.request();
  },
  methods: {
	handleTableChange(pagination, filters, sorter) {
	  if (sorter.order)
		this.order = sorter.field + " " + sorter.order.replace("end", "");

	  if (pagination) this.pagination.current = pagination.current;

	  this.request();
	},
	onSearch(e) {
	  this.request();
	},
	onScore() {
		score(this.current, this.score, this.comment).then(result => {
		if (result.data.code == 10004) {
		  out(this);
		  return;
		} else if (result.data.code != 10000) {
		  this.$message.info(result.data.message);
		  return;
		}
		this.$message.success({ content: result.data.message, duration: 1 });
		for(let i=0;i<this.data.length;++i)
		{
			if(this.data[i].id == id)
			{
				this.data[i].score += this.score;

				break;
			}
		}
	  });
	},
	onInfo(id) {
	  this.userVisible = true;
	  this.info = null;
	  user(id).then(result => {
		if (result.data.code == 10004) {
		  out(this);
		  return;
		} else if (result.data.code != 10000) {
		  this.$message.info(result.data.message);
		  return;
		}
		setTimeout(() => {
		  this.info = result.data.data;
		  this.$message.success({ content: result.data.message, duration: 1 });
			for(let i=0;i<this.data.length;++i)
			{
				if(this.data[i].id == id)
				{
					this.data[i] = result.data.data;

					break;
				}
			}
		}, 800);
	  });
	},
	onLock(id, islock) {
	  lock(id, islock).then(result => {
		if (result.data.code == 10004) {
		  out(this);
		  return;
		} else if (result.data.code != 10000) {
		  this.$message.info(result.data.message);
		  return;
		}
		for(let i=0;i<this.data.length;++i)
		{
		  if(this.data[i].id == id)
		  {
			this.data[i].auth = islock ? 1 : 0;

			console.log(islock ? 1 : 0);

			break;
		  }
		}
	  });
	},
	request() {
	  this.loading = true;
	  users(
		this.pagination.current,
		this.pagination.pageSize,
		this.order,
		this.uid,
		this.like,
		this.status
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
		this.$message.success({ content: result.data.message, duration: 1 });
	  });
	}
  }
};
</script>

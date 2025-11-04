<template>

<el-container style="position:absolute; width:100%; height:100%;">

	<el-container style="width: 100%; height: 100%;">

		<!-- 左侧菜单 -->

		<el-menu default-active="1" :collapse="true" background-color="#333" style="border: 0px;">
			<el-menu-item index="1">
				<i class="el-icon-menu"></i>
				<span slot="title">个人中心</span>
			</el-menu-item>
			<el-menu-item index="2">
				<i class="el-icon-setting"></i>
				<span slot="title">用户管理</span>
			</el-menu-item>
			<el-menu-item index="3">
				<i class="el-icon-setting"></i>
				<span slot="title">版本管理</span>
			</el-menu-item>
			<el-menu-item index="4">
				<i class="el-icon-setting"></i>
				<span slot="title">充值管理</span>
			</el-menu-item>
			<el-menu-item index="5">
				<i class="el-icon-setting"></i>
				<span slot="title">错误管理</span>
			</el-menu-item>
			<el-submenu index="6">
				<template slot="title">
				<i class="el-icon-menu"></i>
				<span slot="title">帮助文档</span>
				</template>
				<el-submenu v-for="item in trees" key="item" >
					<span slot="title">{{item.label}}</span>
				</el-submenu>
			</el-submenu>
		</el-menu>

		<!-- 帮助文档 -->

		<el-main>

			<el-col :span="100" style="margin:20px 0px 0px 20px; width:80%">

				<!-- 接口列表 -->

				<el-row>
					<a>api</a>
				</el-row>

				<el-row :gutter="20">
					<a v-bind:href="'#' + item.name" v-for="item in apis"><el-button>{{ item.name }}</el-button></a>
				</el-row>

				<!-- 常量 -->

				<el-row v-if="consts.length > 0">
					<a>const</a>
				</el-row>

				<el-row v-if="consts.length > 0" style="width: 100%;">
				<el-table :data="consts" :show-header="false" border style="width: 100%;" >
					<el-table-column prop="name" label="name"></el-table-column>
					<el-table-column width="100">
						<template >
							<el-tag>只读</el-tag>
						</template>
					</el-table-column>
				</el-table>
				</el-row>

				<!-- 成员 -->
				
				<el-row>
					<a>member</a>
				</el-row>

				<el-row>
				<el-table :data="members" :show-header="false" border style="width: 100%;">
					<el-table-column prop="type" label="name" width="200"></el-table-column>
					<el-table-column prop="name" label="name" width="200"></el-table-column>
					<el-table-column prop="level" label="level" width="100">
					<el-table-column prop="remark" label="remark" ></el-table-column>
						<template >
							<el-tag>只读</el-tag>
						</template>
					</el-table-column>
				</el-table>
				</el-row>
				
				<!-- 回调 -->
				
				<el-row>
					<a>callback</a>
				</el-row>

				<el-row>
				<el-table :data="callbacks" :show-header="false" order style="width: 100%;">
					<el-table-column prop="name" label="name" width="200"></el-table-column>
					<el-table-column prop="script" label="script" width="400"></el-table-column>
					<el-table-column prop="remark" label="remark"></el-table-column>
				</el-table>
				</el-row>
				
				<!-- 接口名称 -->

				<div v-for="item in apis">
					
					<el-row>
						<a v-bind:name="item.name">{{item.name}}</a>
					</el-row>

					<el-row>
						<el-table :data="item.args" border style="width: 100%;">
							<el-table-column prop="name" label="参数名称" width="200"></el-table-column>
							<el-table-column prop="type" label="参数类型" width="200"></el-table-column>
							<el-table-column prop="empty" label="可空" width="200"></el-table-column>
							<el-table-column prop="remark" label="备注"></el-table-column>
						</el-table>
					</el-row>

				</div>  

			</el-col>

		</el-main>

	</el-container>



</el-container>



</template>

<style>
  
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}

</style>

<script>

	import axios from 'axios';

	const apis = [];

	const consts = [];

	const members = [];

	const callbacks = [];

	const trees = [];

	export default {

		data() 
		{
			return {
				apis: apis,
				consts: consts,
				members: members,
				callbacks: callbacks,
				trees: trees
			}
		},

		created()
		{
			updateTree();

			updateDoc();
		},

		destroyed()
		{

		}

	};

	function updateTree()
	{
		axios({
			method: 'get',
			url: 'http://192.168.21.179/doc?method=tree'
		})
		.then(function (res) {

			trees.splice(0, trees.length);

			for(let i=0;i<res.data.length;++i)
			{
				trees.push({
					name: res.data[i].name,
					label: res.data[i].label
				})
			}
		})
		.catch(function (err) {
			console.log(err);
		});
	}

	function updateDoc()
	{
		axios({
			method: 'get',
			url: 'http://192.168.21.179/doc?method=child'
		})
		.then(function (res) {

			apis.splice(0, apis.length);

			consts.splice(0, consts.length);

			members.splice(0, members.length);

			callbacks.splice(0, callbacks.length);

			for(let i=0;i<res.data.apis.length;++i)
			{
				const args = [];

				for(let n=0;n<res.data.apis[i].length;++n)
				{
					args.push({
						name : res.data.apis[i][n].name,
						type : res.data.apis[i][n].type,
						empty : res.data.apis[i][n].empty,
						remark : res.data.apis[i][n].remark
					})
				};

				apis.push({
					name: res.data.apis[i].name,
					type: res.data.apis[i].type,
					remake: res.data.apis[i].remark,
					args: args
				});
			}

			for(let i=0;i<res.data.members.length;++i)
			{
				members.push({
					name: res.data.members[i].name,
					type: res.data.members[i].type,
					remark: res.data.members[i].remark
				})   
			}

			for(let i=0;i<res.data.callbacks.length;++i)
			{
				callbacks.push({
					name: res.data.callbacks[i].name,
					type: res.data.callbacks[i].type,
					script: res.data.callbacks[i].script
				})
			}

			for(let i=0;i<res.data.consts.length;++i)
			{
				consts.push({
					name: res.data.consts[i].name
				});
			}    

		})
		.catch(function (err) {
			console.log(err);
		});
	}

</script>

<style>

a{
	color: #d2d2d2;
}

.el-header
{
	padding: 0px;
}

.el-table thead
{
	color: #333;
	font-size: 14px;
	font-weight: normal;
}

th
{
	font-weight: normal;
}

.el-table td
{
	padding: 8px;
}

.el-form-item__label 
{
	text-align: left;
}

.el-form-item
{
	margin: 24px;
}

.el-tabs__content
{
	height: calc(100% - 41px);
}

.el-row
{
	margin-bottom: 20px;
}

.el-button
{
	margin-left: 0px;

	margin-top: 10px;

	margin-right: 10px;

	margin-bottom: 5px;

	width: 280px;

	height: 30px; 

	padding: 0px;

	border-radius: 0px;
}

.el-button + .el-button
{
	margin-left: 0px;

	margin-top: 10px;

	margin-right: 10px;

	margin-bottom: 5px;

	width: 280px;

	height: 30px;

	padding: 0px;

	border-radius: 0px;
}

</style>


<style scoped>

</style>
<template>
  <div style="width: 100%; height: 100%; position: absolute;">
	<a-form
	  id="formLogin"
	  class="user-layout-login"
	  ref="formLogin"
	  :form="form"
	  @submit="handleSubmit"
	>
	  <a-tabs
		:activeKey="customActiveKey"
		:tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
		@change="handleTabClick"
	  >
		<a-tab-pane key="tab1" tab="账号密码登录">
		  <a-alert
			v-if="isLoginError"
			type="error"
			showIcon
			style="margin-bottom: 24px;"
			message="请输入密码"
		  />
		  <a-form-item>
			<a-input
			  size="large"
			  type="text"
			  placeholder="请输入账号"
			  v-decorator="[
				'username',
				{rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}
			  ]"
			>
			  <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }" />
			</a-input>
		  </a-form-item>

		  <a-form-item>
			<a-input
			  size="large"
			  type="password"
			  autocomplete="false"
			  placeholder="请输入密码"
			  v-decorator="[
				'password',
				{rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}
			  ]"
			>
			  <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }" />
			</a-input>
		  </a-form-item>
		</a-tab-pane>
		<a-tab-pane key="tab2" tab="手机号登录">
		  <a-form-item>
			<a-input
			  size="large"
			  type="text"
			  placeholder="手机号"
			  v-decorator="['mobile', {rules: [{ required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }], validateTrigger: 'change'}]"
			>
			  <a-icon slot="prefix" type="mobile" :style="{ color: 'rgba(0,0,0,.25)' }" />
			</a-input>
		  </a-form-item>

		  <a-row :gutter="16">
			<a-col class="gutter-row" :span="16">
			  <a-form-item>
				<a-input
				  size="large"
				  type="text"
				  placeholder="验证码"
				  v-decorator="['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]"
				>
				  <a-icon slot="prefix" type="mail" :style="{ color: 'rgba(0,0,0,.25)' }" />
				</a-input>
			  </a-form-item>
			</a-col>
			<a-col class="gutter-row" :span="8">
			  <a-button
				class="getCaptcha"
				tabindex="-1"
				:disabled="state.smsSendBtn"
				@click.stop.prevent="getCaptcha"
				v-text="!state.smsSendBtn && '获取验证码' || (state.time+' s')"
			  ></a-button>
			</a-col>
		  </a-row>
		</a-tab-pane>
	  </a-tabs>

	  <a-form-item style="margin-top:16px">
		<a-button
		  size="large"
		  type="primary"
		  htmlType="submit"
		  class="login-button"
		  :loading="state.loginBtn"
		  :disabled="state.loginBtn"
		>登录</a-button>
	  </a-form-item>
	</a-form>
  </div>
</template>

<script>
import { login } from "./api.js";

import { mapActions } from "vuex";


export default {
  components: {},
  data() {
	return {
	  customActiveKey: "tab1",
	  loginBtn: false,
	  // login type: 0 email, 1 username, 2 telephone
	  loginType: 0,
	  isLoginError: false,
	  stepCaptchaVisible: false,
	  form: this.$form.createForm(this),
	  state: {
		time: 60,
		loginBtn: false,
		// login type: 0 email, 1 username, 2 telephone
		loginType: 0,
		smsSendBtn: false
	  }
	};
  },
  methods: {
	// handler
	handleUsernameOrEmail(rule, value, callback) {
	  const { state } = this;
	  const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	  if (regex.test(value)) {
		state.loginType = 0;
	  } else {
		state.loginType = 1;
	  }
	  callback();
	},
	handleTabClick(key) {
	  this.customActiveKey = key;
	  // this.form.resetFields()
	},
	handleSubmit(e) {
	  e.preventDefault();
	  const {
		form: { validateFields },
		state,
		customActiveKey,
		Login
	  } = this;

	  state.loginBtn = true;

	  const self = this;

	  const validateFieldsKey =
		customActiveKey === "tab1"
		  ? ["username", "password"]
		  : ["mobile", "captcha"];

	  validateFields(validateFieldsKey, { force: true }, (err, values) => {
		if (!err) {
			login(values.username, values.password)
			.then(function(result) {
				state.loginBtn = false;
				if (result.data.code == 10000)
				{
					localStorage.setItem("auth", true)

					localStorage.setItem("username", values.username);

					self.$router.push({ path: "/admin" });
				} 
				else
				{
					self.$notification["error"]({
						message: "错误",
						description: result.data.message,
						duration: 4
					});
				}
			})
			.catch(function(err) {
				state.loginBtn = false;
				self.$notification["error"]({
					message: "错误",
					description: "网络请求错误",
					duration: 4
				});
			});
		} else {
		  setTimeout(() => {
			state.loginBtn = false;
		  }, 600);
		}
	  });
	},
	getCaptcha(e) {
	  e.preventDefault();
	  const {
		form: { validateFields },
		state
	  } = this;

	  validateFields(["mobile"], { force: true }, (err, values) => {
		if (!err) {
		  state.smsSendBtn = true;

		  const interval = window.setInterval(() => {
			if (state.time-- <= 0) {
			  state.time = 60;
			  state.smsSendBtn = false;
			  window.clearInterval(interval);
			}
		  }, 1000);

		  const hide = this.$message.loading("验证码发送中..", 0);
		  getSmsCaptcha({ mobile: values.mobile })
			.then(res => {
			  setTimeout(hide, 2500);
			  this.$notification["success"]({
				message: "提示",
				description:
				  "验证码获取成功，您的验证码为：" + res.result.captcha,
				duration: 8
			  });
			})
			.catch(err => {
			  setTimeout(hide, 1);
			  clearInterval(interval);
			  state.time = 60;
			  state.smsSendBtn = false;
			  this.requestFailed(err);
			});
		}
	  });
	},
	stepCaptchaSuccess() {
	  this.loginSuccess();
	},
	stepCaptchaCancel() {
	  this.Logout().then(() => {
		this.loginBtn = false;
		this.stepCaptchaVisible = false;
	  });
	},
	loginSuccess(res) {
	  console.log(res);
	  this.$router.push({ name: "dashboard" });
	  this.isLoginError = false;
	  // 延迟 1 秒显示欢迎信息
	  setTimeout(() => {
		this.$notification.success({
		  message: "欢迎",
		  description: `欢迎回来`
		});
	  }, 1000);
	},
	requestFailed(err) {
	  this.isLoginError = true;
	  this.$notification["error"]({
		message: "错误",
		description:
		  ((err.response || {}).data || {}).message ||
		  "请求出现错误，请稍后再试",
		duration: 4
	  });
	}
  }
};
</script>

<style lang="less" scoped>
.user-layout-login {
  width: 360px;

  margin-left: auto;

  margin-right: auto;

  left: 50%;

  top: 50%;

  transform: translate(-50%, -70%);

  position: absolute;

  label {
	font-size: 14px;
  }

  .getCaptcha {
	display: block;
	width: 100%;
	height: 40px;
  }

  .forge-password {
	font-size: 14px;
  }

  button.login-button {
	padding: 0 15px;
	font-size: 16px;
	height: 40px;
	width: 100%;
  }

  .user-login-other {
	text-align: left;
	margin-top: 24px;
	line-height: 22px;

	.item-icon {
	  font-size: 24px;
	  color: rgba(0, 0, 0, 0.2);
	  margin-left: 16px;
	  vertical-align: middle;
	  cursor: pointer;
	  transition: color 0.3s;

	  &:hover {
		color: #1890ff;
	  }
	}

	.register {
	  float: right;
	}
  }
}
</style>
